import {
  eContractid,
  eEthereumNetwork,
  eNetwork,
  iMultiPoolsAssets,
  IReserveParams,
  tEthereumAddress,
} from './types';
import { UmeeProtocolDataProvider } from '../types/UmeeProtocolDataProvider';
import { chunk, DRE, getDb, waitForTx } from './misc-utils';
import {
  getUmeeProtocolDataProvider,
  getUToken,
  getUTokensAndRatesHelper,
  getFirstSigner,
  getLendingPoolAddressesProvider,
  getLendingPoolConfiguratorProxy,
  getStableAndVariableTokensHelper,
} from './contracts-getters';
import { rawInsertContractAddressInDb } from './contracts-helpers';
import { BigNumber, BigNumberish, Signer } from 'ethers';
import {
  deployDefaultReserveInterestRateStrategy,
  deployDelegationAwareUToken,
  deployDelegationAwareUTokenImpl,
  deployGenericUToken,
  deployGenericUTokenImpl,
  deployGenericStableDebtToken,
  deployGenericVariableDebtToken,
  deployStableDebtToken,
  deployVariableDebtToken,
} from './contracts-deployments';
import { ZERO_ADDRESS } from './constants';
import { isZeroAddress } from 'ethereumjs-util';
import { DefaultReserveInterestRateStrategy, DelegationAwareUToken } from '../types';
import { config } from 'process';

export const chooseUTokenDeployment = (id: eContractid) => {
  switch (id) {
    case eContractid.UToken:
      return deployGenericUToken;
    case eContractid.DelegationAwareUToken:
      return deployDelegationAwareUToken;
    default:
      throw Error(`Missing uToken deployment script for: ${id}`);
  }
};

export const initReservesByHelper = async (
  reservesParams: iMultiPoolsAssets<IReserveParams>,
  tokenAddresses: { [symbol: string]: tEthereumAddress },
  uTokenNamePrefix: string,
  stableDebtTokenNamePrefix: string,
  variableDebtTokenNamePrefix: string,
  symbolPrefix: string,
  admin: tEthereumAddress,
  treasuryAddress: tEthereumAddress,
  incentivesController: tEthereumAddress,
  verify: boolean
): Promise<BigNumber> => {
  let gasUsage = BigNumber.from('0');
  const stableAndVariableDeployer = await getStableAndVariableTokensHelper();

  const addressProvider = await getLendingPoolAddressesProvider();

  // CHUNK CONFIGURATION
  const initChunks = 4;

  // Initialize variables for future reserves initialization
  let reserveTokens: string[] = [];
  let reserveInitDecimals: string[] = [];
  let reserveSymbols: string[] = [];

  let initInputParams: {
    uTokenImpl: string;
    stableDebtTokenImpl: string;
    variableDebtTokenImpl: string;
    underlyingAssetDecimals: BigNumberish;
    interestRateStrategyAddress: string;
    underlyingAsset: string;
    treasury: string;
    incentivesController: string;
    underlyingAssetName: string;
    uTokenName: string;
    uTokenSymbol: string;
    variableDebtTokenName: string;
    variableDebtTokenSymbol: string;
    stableDebtTokenName: string;
    stableDebtTokenSymbol: string;
    params: string;
  }[] = [];

  let strategyRates: [
    string, // addresses provider
    string,
    string,
    string,
    string,
    string,
    string
  ];
  let rateStrategies: Record<string, typeof strategyRates> = {};
  let strategyAddresses: Record<string, tEthereumAddress> = {};
  let strategyAddressPerAsset: Record<string, string> = {};
  let uTokenType: Record<string, string> = {};
  let delegationAwareUTokenImplementationAddress = '';
  let uTokenImplementationAddress = '';
  let stableDebtTokenImplementationAddress = '';
  let variableDebtTokenImplementationAddress = '';

  // NOT WORKING ON MATIC, DEPLOYING INDIVIDUAL IMPLs INSTEAD
  // const tx1 = await waitForTx(
  //   await stableAndVariableDeployer.initDeployment([ZERO_ADDRESS], ["1"])
  // );
  // console.log(tx1.events);
  // tx1.events?.forEach((event, index) => {
  //   stableDebtTokenImplementationAddress = event?.args?.stableToken;
  //   variableDebtTokenImplementationAddress = event?.args?.variableToken;
  //   rawInsertContractAddressInDb(`stableDebtTokenImpl`, stableDebtTokenImplementationAddress);
  //   rawInsertContractAddressInDb(`variableDebtTokenImpl`, variableDebtTokenImplementationAddress);
  // });
  //gasUsage = gasUsage.add(tx1.gasUsed);
  stableDebtTokenImplementationAddress = await (await deployGenericStableDebtToken()).address;
  variableDebtTokenImplementationAddress = await (await deployGenericVariableDebtToken()).address;

  const uTokenImplementation = await deployGenericUTokenImpl(verify);
  uTokenImplementationAddress = uTokenImplementation.address;
  rawInsertContractAddressInDb(`uTokenImpl`, uTokenImplementationAddress);

  const delegatedAwareReserves = Object.entries(reservesParams).filter(
    ([_, { uTokenImpl }]) => uTokenImpl === eContractid.DelegationAwareUToken
  ) as [string, IReserveParams][];

  if (delegatedAwareReserves.length > 0) {
    const delegationAwareUTokenImplementation = await deployDelegationAwareUTokenImpl(verify);
    delegationAwareUTokenImplementationAddress = delegationAwareUTokenImplementation.address;
    rawInsertContractAddressInDb(
      `delegationAwareUTokenImpl`,
      delegationAwareUTokenImplementationAddress
    );
  }

  const reserves = Object.entries(reservesParams).filter(
    ([_, { uTokenImpl }]) =>
      uTokenImpl === eContractid.DelegationAwareUToken || uTokenImpl === eContractid.UToken
  ) as [string, IReserveParams][];

  for (let [symbol, params] of reserves) {
    if (!tokenAddresses[symbol]) {
      console.log(`- Skipping init of ${symbol} due token address is not set at markets config`);
      continue;
    }
    const { strategy, uTokenImpl, reserveDecimals } = params;
    const {
      optimalUtilizationRate,
      baseVariableBorrowRate,
      variableRateSlope1,
      variableRateSlope2,
      stableRateSlope1,
      stableRateSlope2,
    } = strategy;
    if (!strategyAddresses[strategy.name]) {
      // Strategy does not exist, create a new one
      rateStrategies[strategy.name] = [
        addressProvider.address,
        optimalUtilizationRate,
        baseVariableBorrowRate,
        variableRateSlope1,
        variableRateSlope2,
        stableRateSlope1,
        stableRateSlope2,
      ];
      strategyAddresses[strategy.name] = (
        await deployDefaultReserveInterestRateStrategy(rateStrategies[strategy.name], verify)
      ).address;
      // This causes the last strategy to be printed twice, once under "DefaultReserveInterestRateStrategy"
      // and once under the actual `strategyASSET` key.
      rawInsertContractAddressInDb(strategy.name, strategyAddresses[strategy.name]);
    }
    strategyAddressPerAsset[symbol] = strategyAddresses[strategy.name];
    console.log('Strategy address for asset %s: %s', symbol, strategyAddressPerAsset[symbol]);

    if (uTokenImpl === eContractid.UToken) {
      uTokenType[symbol] = 'generic';
    } else if (uTokenImpl === eContractid.DelegationAwareUToken) {
      uTokenType[symbol] = 'delegation aware';
    }

    reserveInitDecimals.push(reserveDecimals);
    reserveTokens.push(tokenAddresses[symbol]);
    reserveSymbols.push(symbol);
  }

  for (let i = 0; i < reserveSymbols.length; i++) {
    let uTokenToUse: string;
    if (uTokenType[reserveSymbols[i]] === 'generic') {
      uTokenToUse = uTokenImplementationAddress;
    } else {
      uTokenToUse = delegationAwareUTokenImplementationAddress;
    }

    initInputParams.push({
      uTokenImpl: uTokenToUse,
      stableDebtTokenImpl: stableDebtTokenImplementationAddress,
      variableDebtTokenImpl: variableDebtTokenImplementationAddress,
      underlyingAssetDecimals: reserveInitDecimals[i],
      interestRateStrategyAddress: strategyAddressPerAsset[reserveSymbols[i]],
      underlyingAsset: reserveTokens[i],
      treasury: treasuryAddress,
      incentivesController,
      underlyingAssetName: reserveSymbols[i],
      uTokenName: `${uTokenNamePrefix} ${reserveSymbols[i]}`,
      uTokenSymbol: `u${symbolPrefix}${reserveSymbols[i]}`,
      variableDebtTokenName: `${variableDebtTokenNamePrefix} ${symbolPrefix}${reserveSymbols[i]}`,
      variableDebtTokenSymbol: `variableDebt${symbolPrefix}${reserveSymbols[i]}`,
      stableDebtTokenName: `${stableDebtTokenNamePrefix} ${reserveSymbols[i]}`,
      stableDebtTokenSymbol: `stableDebt${symbolPrefix}${reserveSymbols[i]}`,
      params: '0x10',
    });
  }

  // Deploy init reserves per chunks
  const chunkedSymbols = chunk(reserveSymbols, initChunks);
  const chunkedInitInputParams = chunk(initInputParams, initChunks);

  const configurator = await getLendingPoolConfiguratorProxy();
  //await waitForTx(await addressProvider.setPoolAdmin(admin));

  console.log(`- Reserves initialization in ${chunkedInitInputParams.length} txs`);
  for (let chunkIndex = 0; chunkIndex < chunkedInitInputParams.length; chunkIndex++) {
    console.log(chunkedInitInputParams[chunkIndex]);
    const tx3 = await waitForTx(
      await configurator.batchInitReserve(chunkedInitInputParams[chunkIndex])
    );

    console.log(`  - Reserve ready for: ${chunkedSymbols[chunkIndex].join(', ')}`);
    console.log('    * gasUsed', tx3.gasUsed.toString());
    //gasUsage = gasUsage.add(tx3.gasUsed);
  }

  return gasUsage; // Deprecated
};

export const getPairsTokenAggregator = (
  allAssetsAddresses: {
    [tokenSymbol: string]: tEthereumAddress;
  },
  aggregatorsAddresses: { [tokenSymbol: string]: tEthereumAddress }
): [string[], string[]] => {
  const { ETH, USD, WETH, ...assetsAddressesWithoutEth } = allAssetsAddresses;

  const pairs = Object.entries(assetsAddressesWithoutEth).map(([tokenSymbol, tokenAddress]) => {
    if (tokenSymbol !== 'WETH' && tokenSymbol !== 'ETH') {
      const aggregatorAddressIndex = Object.keys(aggregatorsAddresses).findIndex(
        (value) => value === tokenSymbol
      );
      const [, aggregatorAddress] = (
        Object.entries(aggregatorsAddresses) as [string, tEthereumAddress][]
      )[aggregatorAddressIndex];
      return [tokenAddress, aggregatorAddress];
    }
  }) as [string, string][];

  const mappedPairs = pairs.map(([asset]) => asset);
  const mappedAggregators = pairs.map(([, source]) => source);

  return [mappedPairs, mappedAggregators];
};

export const configureReservesByHelper = async (
  reservesParams: iMultiPoolsAssets<IReserveParams>,
  tokenAddresses: { [symbol: string]: tEthereumAddress },
  helpers: UmeeProtocolDataProvider,
  admin: tEthereumAddress
) => {
  const addressProvider = await getLendingPoolAddressesProvider();
  const atokenAndRatesDeployer = await getUTokensAndRatesHelper();
  const tokens: string[] = [];
  const symbols: string[] = [];

  const inputParams: {
    asset: string;
    baseLTV: BigNumberish;
    liquidationThreshold: BigNumberish;
    liquidationBonus: BigNumberish;
    reserveFactor: BigNumberish;
    stableBorrowingEnabled: boolean;
    borrowingEnabled: boolean;
  }[] = [];

  for (const [
    assetSymbol,
    {
      baseLTVAsCollateral,
      liquidationBonus,
      liquidationThreshold,
      reserveFactor,
      stableBorrowRateEnabled,
      borrowingEnabled,
    },
  ] of Object.entries(reservesParams) as [string, IReserveParams][]) {
    if (!tokenAddresses[assetSymbol]) {
      console.log(
        `- Skipping init of ${assetSymbol} due token address is not set at markets config`
      );
      continue;
    }
    if (baseLTVAsCollateral === '-1') continue;

    const assetAddressIndex = Object.keys(tokenAddresses).findIndex(
      (value) => value === assetSymbol
    );
    const [, tokenAddress] = (Object.entries(tokenAddresses) as [string, string][])[
      assetAddressIndex
    ];
    const { usageAsCollateralEnabled: alreadyEnabled } = await helpers.getReserveConfigurationData(
      tokenAddress
    );

    if (alreadyEnabled) {
      console.log(`- Reserve ${assetSymbol} is already enabled as collateral, skipping`);
      continue;
    }
    // Push data

    inputParams.push({
      asset: tokenAddress,
      baseLTV: baseLTVAsCollateral,
      liquidationThreshold: liquidationThreshold,
      liquidationBonus: liquidationBonus,
      reserveFactor: reserveFactor,
      stableBorrowingEnabled: stableBorrowRateEnabled,
      borrowingEnabled: borrowingEnabled,
    });

    tokens.push(tokenAddress);
    symbols.push(assetSymbol);
  }
  if (tokens.length) {
    // Set uTokenAndRatesDeployer as temporal admin
    await waitForTx(await addressProvider.setPoolAdmin(atokenAndRatesDeployer.address));

    // Deploy init per chunks
    const enableChunks = 20;
    const chunkedSymbols = chunk(symbols, enableChunks);
    const chunkedInputParams = chunk(inputParams, enableChunks);

    console.log(`- Configure reserves in ${chunkedInputParams.length} txs`);
    for (let chunkIndex = 0; chunkIndex < chunkedInputParams.length; chunkIndex++) {
      await waitForTx(
        await atokenAndRatesDeployer.configureReserves(chunkedInputParams[chunkIndex], {
          gasLimit: 12000000,
        })
      );
      console.log(`  - Init for: ${chunkedSymbols[chunkIndex].join(', ')}`);
    }
    // Set deployer back as admin
    await waitForTx(await addressProvider.setPoolAdmin(admin));
  }
};

const getAddressById = async (
  id: string,
  network: eNetwork
): Promise<tEthereumAddress | undefined> =>
  (await getDb().get(`${id}.${network}`).value())?.address || undefined;

// Function deprecated
const isErc20SymbolCorrect = async (token: tEthereumAddress, symbol: string) => {
  const erc20 = await getUToken(token); // using uToken for ERC20 interface
  const erc20Symbol = await erc20.symbol();
  return symbol === erc20Symbol;
};
