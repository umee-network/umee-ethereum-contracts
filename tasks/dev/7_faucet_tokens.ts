import { task } from 'hardhat/config';
import { BigNumber } from 'ethers';
import { getFirstSigner } from '../../helpers/contracts-getters';
import { FaucetERC20Factory } from '../../types';

task('dev:deploy-faucet-tokens', 'Deploy faucet tokens for dev enviroment').setAction(
  async ({ verify }, localBRE) => {
    await localBRE.run('set-DRE');

    const faucetUSDC = await new FaucetERC20Factory(await getFirstSigner()).deploy(
      'USDC',
      'USDC',
      6,
      BigNumber.from(10).pow(6),
      3600 * 24
    );

    const faucetUSDT = await new FaucetERC20Factory(await getFirstSigner()).deploy(
      'USDT',
      'USDT',
      6,
      BigNumber.from(10).pow(6),
      3600 * 24
    );

    const faucetDAI = await new FaucetERC20Factory(await getFirstSigner()).deploy(
      'DAI',
      'DAI',
      6,
      BigNumber.from(10).pow(18),
      3600 * 24
    );

    await faucetUSDC.deployTransaction.wait();
    await faucetUSDT.deployTransaction.wait();
    await faucetDAI.deployTransaction.wait();

    console.log('Faucet USDC address', faucetUSDC.address);
    console.log('Faucet USDT address', faucetUSDT.address);
    console.log('Faucet DAI address', faucetDAI.address);
  }
);
