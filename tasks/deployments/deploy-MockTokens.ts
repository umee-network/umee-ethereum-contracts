import { task } from 'hardhat/config';
import { Contract, ContractFactory } from 'ethers';
import { eEthereumNetwork, ePolygonNetwork, eNetwork } from '../../helpers/types';
import { setDRE } from '../../helpers/misc-utils';
import { getFirstSigner } from '../../helpers/contracts-getters';
import { exit } from 'process';

import {
  MockAtomERC20Factory,
  MockDAIFactory,
  MockUSDCFactory,
  MockUSDTFactory,
  WETH9MockedFactory,
} from '../../types';

// UMEE: @dev this is for the goerli price feeds: not part of original Aave v2 codebase
task('deploy-MockTokens', 'Deploy Testnet Tokens')
  .addFlag('verify', 'Verify contracts at Etherscan')
  .setAction(async ({ verify, symbol }, localBRE) => {
    const network = localBRE.network.name;
    setDRE(localBRE);

    if (!localBRE.network.config.chainId) {
      throw new Error('INVALID_CHAIN_ID');
    }

    const mockAtomERC20 = await new MockAtomERC20Factory(await getFirstSigner()).deploy();
    await mockAtomERC20.deployTransaction.wait();

    const mockDaiERC20 = await new MockDAIFactory(await getFirstSigner()).deploy();
    await mockDaiERC20.deployTransaction.wait();

    const mockUsdcERC20 = await new MockUSDCFactory(await getFirstSigner()).deploy();
    await mockUsdcERC20.deployTransaction.wait();

    const mockUsdtERC20 = await new MockUSDTFactory(await getFirstSigner()).deploy();
    await mockUsdtERC20.deployTransaction.wait();

    console.log(`
        Mock Tokens ${network}:
        ATOM Mock: ${mockAtomERC20.address}
        DAI Mock: ${mockDaiERC20.address}
        USDC Mock: ${mockUsdcERC20.address}
        USDT Mock: ${mockUsdtERC20.address}
    `);
  });
