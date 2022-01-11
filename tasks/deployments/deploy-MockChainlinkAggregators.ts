import { task } from 'hardhat/config';
import { Contract, ContractFactory } from 'ethers';
import { eEthereumNetwork, ePolygonNetwork, eNetwork } from '../../helpers/types';
import { setDRE } from '../../helpers/misc-utils';
import { getFirstSigner } from '../../helpers/contracts-getters';
import { exit } from 'process';

import {
  WethMockAggregatorFactory,
  AtomMockAggregatorFactory,
  DaiMockAggregatorFactory,
  UsdcMockAggregatorFactory,
  UsdtMockAggregatorFactory,
  BaseMockAggregatorFactory,
} from '../../types';

// UMEE: @dev this is for the goerli price feeds: not part of original Aave v2 codebase
task('deploy-MockChainlinkAggregators', 'Deploy Mock Chainlink Aggregators')
  .addFlag('verify', 'Verify contracts at Etherscan')
  .setAction(async ({ verify, symbol }, localBRE) => {
    const network = localBRE.network.name;
    setDRE(localBRE);

    if (!localBRE.network.config.chainId) {
      throw new Error('INVALID_CHAIN_ID');
    }

    const addressesByNetwork: {
      [key: string]: { link_address: string };
    } = {
      [eEthereumNetwork.kovan]: {
        link_address: '0xa36085F69e2889c224210F603D836748e7dC0088',
      },
      [eEthereumNetwork.rinkeby]: {
        link_address: '0x01BE23585060835E02B77ef475b0Cc51aA1e0709',
      },
      [eEthereumNetwork.goerli]: {
        link_address: '0x326c977e6efc84e512bb9c30f76e30c160ed06fb',
      },
      [eEthereumNetwork.main]: {
        link_address: '0x514910771af9ca656af840dff83e8264ecf986ca',
      },
      [ePolygonNetwork.matic]: {
        link_address: '0xb0897686c545045afc77cf20ec7a532e3120e0f1',
      },
      [ePolygonNetwork.mumbai]: {
        link_address: '0x326C977E6efc84E512bB9C30f76E30c160eD06FB',
      },
    };

    const supportedNetworks = Object.keys(addressesByNetwork);

    if (!supportedNetworks.includes(network)) {
      console.error(
        `[task][error] Network "${network}" not supported, please use one of: ${supportedNetworks.join()}`
      );
      exit(2);
    }

    console.log(`\n- Base Mock Aggregator deployment`);
    const baseMockAggregator = await new BaseMockAggregatorFactory(await getFirstSigner()).deploy({
      gasLimit: 12450000,
    });
    await baseMockAggregator.deployTransaction.wait();

    const base_address = baseMockAggregator.address;

    console.log(`\n- WETH Mock Aggregator deployment`);
    const wethMockAggregator = await new WethMockAggregatorFactory(await getFirstSigner()).deploy(
      base_address,
      {
        gasLimit: 12450000,
      }
    );
    await wethMockAggregator.deployTransaction.wait();

    console.log(`\n- ATOM Mock Aggregator deployment`);
    const atomMockAggregator = await new AtomMockAggregatorFactory(await getFirstSigner()).deploy(
      base_address,
      {
        gasLimit: 12450000,
      }
    );
    await atomMockAggregator.deployTransaction.wait();

    console.log(`\n- DAI Mock Aggregator deployment`);
    const daiMockAggregator = await new DaiMockAggregatorFactory(await getFirstSigner()).deploy(
      base_address,
      {
        gasLimit: 12450000,
      }
    );
    await daiMockAggregator.deployTransaction.wait();

    console.log(`\n- USDC Mock Aggregator deployment`);
    const usdcMockAggregator = await new UsdcMockAggregatorFactory(await getFirstSigner()).deploy(
      base_address,
      {
        gasLimit: 12450000,
      }
    );
    await usdcMockAggregator.deployTransaction.wait();

    console.log(`\n- USDT Mock Aggregator deployment`);
    const usdtMockAggregator = await new UsdtMockAggregatorFactory(await getFirstSigner()).deploy(
      base_address,
      {
        gasLimit: 12450000,
      }
    );
    await usdtMockAggregator.deployTransaction.wait();

    console.log(`
        Chainlink Mock Aggregators ${network}:
        BaseMockAggregator: ${baseMockAggregator.address}
        WETHMockAggregator: ${wethMockAggregator.address}
        ATOMMockAggregator: ${atomMockAggregator.address}
        DAIMockAggregator: ${daiMockAggregator.address}
        USDCMockAggregator: ${usdcMockAggregator.address}
        USDTMockAggregator: ${usdtMockAggregator.address}
    `);
  });
