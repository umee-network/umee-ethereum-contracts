import { task } from 'hardhat/config';
import {
  loadPoolConfig,
  ConfigNames,
  getWethAddress,
  getTreasuryAddress,
} from '../../helpers/configuration';
import { ZERO_ADDRESS } from '../../helpers/constants';
import {
  getAddressById,
  getUToken,
  getFirstSigner,
  getInterestRateStrategy,
  getLendingPoolAddressesProvider,
  getProxy,
  getStableDebtToken,
  getVariableDebtToken,
} from '../../helpers/contracts-getters';
import { getParamPerNetwork, verifyContract } from '../../helpers/contracts-helpers';
import { eContractid, eNetwork, ICommonConfiguration, IReserveParams } from '../../helpers/types';
import { LendingPoolConfiguratorFactory, LendingPoolFactory } from '../../types';

task('verify:tokens', 'Deploy oracles for dev enviroment')
  .addParam('pool', `Pool name to retrieve configuration, supported: ${Object.values(ConfigNames)}`)
  .setAction(async ({ verify, all, pool }, localDRE) => {
    await localDRE.run('set-DRE');
    const network = localDRE.network.name as eNetwork;
    const poolConfig = loadPoolConfig(pool);
    const { ReserveAssets, ReservesConfig } = poolConfig as ICommonConfiguration;
    const treasuryAddress = await getTreasuryAddress(poolConfig);

    const addressesProvider = await getLendingPoolAddressesProvider();
    const lendingPoolProxy = LendingPoolFactory.connect(
      await addressesProvider.getLendingPool(),
      await getFirstSigner()
    );

    const lendingPoolConfigurator = LendingPoolConfiguratorFactory.connect(
      await addressesProvider.getLendingPoolConfigurator(),
      await getFirstSigner()
    );

    const configs = Object.entries(ReservesConfig) as [string, IReserveParams][];
    for (const entry of Object.entries(getParamPerNetwork(ReserveAssets, network))) {
      const [token, tokenAddress] = entry;
      console.log(`- Verifying ${token} token related contracts`);
      const {
        stableDebtTokenAddress,
        variableDebtTokenAddress,
        uTokenAddress,
        interestRateStrategyAddress,
      } = await lendingPoolProxy.getReserveData(tokenAddress);

      const tokenConfig = configs.find(([symbol]) => symbol === token);
      if (!tokenConfig) {
        throw `ReservesConfig not found for ${token} token`;
      }

      const {
        optimalUtilizationRate,
        baseVariableBorrowRate,
        variableRateSlope1,
        variableRateSlope2,
        stableRateSlope1,
        stableRateSlope2,
      } = tokenConfig[1].strategy;

      console.log;
      // Proxy Stable Debt
      console.log(`\n- Verifying Stable Debt Token proxy...\n`);
      await verifyContract(
        eContractid.InitializableAdminUpgradeabilityProxy,
        await getProxy(stableDebtTokenAddress),
        [lendingPoolConfigurator.address]
      );

      // Proxy Variable Debt
      console.log(`\n- Verifying  Debt Token proxy...\n`);
      await verifyContract(
        eContractid.InitializableAdminUpgradeabilityProxy,
        await getProxy(variableDebtTokenAddress),
        [lendingPoolConfigurator.address]
      );

      // Proxy uToken
      console.log('\n- Verifying uToken proxy...\n');
      await verifyContract(
        eContractid.InitializableAdminUpgradeabilityProxy,
        await getProxy(uTokenAddress),
        [lendingPoolConfigurator.address]
      );

      // Strategy Rate
      console.log(`\n- Verifying Strategy rate...\n`);
      await verifyContract(
        eContractid.DefaultReserveInterestRateStrategy,
        await getInterestRateStrategy(interestRateStrategyAddress),
        [
          addressesProvider.address,
          optimalUtilizationRate,
          baseVariableBorrowRate,
          variableRateSlope1,
          variableRateSlope2,
          stableRateSlope1,
          stableRateSlope2,
        ]
      );

      const stableDebt = await getAddressById(`stableDebt${token}`);
      const variableDebt = await getAddressById(`variableDebt${token}`);
      const uToken = await getAddressById(`a${token}`);

      if (uToken) {
        console.log('\n- Verifying uToken...\n');
        await verifyContract(eContractid.UToken, await getUToken(uToken), [
          lendingPoolProxy.address,
          tokenAddress,
          treasuryAddress,
          `Umee interest bearing ${token}`,
          `a${token}`,
          ZERO_ADDRESS,
        ]);
      } else {
        console.error(`Skipping uToken verify for ${token}. Missing address at JSON DB.`);
      }
      if (stableDebt) {
        console.log('\n- Verifying StableDebtToken...\n');
        await verifyContract(eContractid.StableDebtToken, await getStableDebtToken(stableDebt), [
          lendingPoolProxy.address,
          tokenAddress,
          `Umee stable debt bearing ${token}`,
          `stableDebt${token}`,
          ZERO_ADDRESS,
        ]);
      } else {
        console.error(`Skipping stable debt verify for ${token}. Missing address at JSON DB.`);
      }
      if (variableDebt) {
        console.log('\n- Verifying VariableDebtToken...\n');
        await verifyContract(
          eContractid.VariableDebtToken,
          await getVariableDebtToken(variableDebt),
          [
            lendingPoolProxy.address,
            tokenAddress,
            `Umee variable debt bearing ${token}`,
            `variableDebt${token}`,
            ZERO_ADDRESS,
          ]
        );
      } else {
        console.error(`Skipping variable debt verify for ${token}. Missing address at JSON DB.`);
      }
    }
  });
