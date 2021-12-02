import { oneRay, ZERO_ADDRESS } from '../../helpers/constants';
import { ICosmosConfiguration, eEthereumNetwork } from '../../helpers/types';

import { CommonsConfig } from './commons';
import {
  strategyDAI,
  strategyUSDC,
  strategyUSDT,
  strategyATOM,
  strategyWETH

} from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const CosmosConfig: ICosmosConfiguration = {
  ...CommonsConfig,
  MarketId: 'Cosmos genesis market',
  ProviderId: 1,
  ReservesConfig: { // TODO: Add UMEE strat
    ATOM: strategyATOM,
    DAI: strategyDAI,
    USDC: strategyUSDC,
    USDT: strategyUSDT,
    WETH: strategyWETH,
  },
  ReserveAssets: {
    [eEthereumNetwork.buidlerevm]: {},
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.coverage]: {},
    [eEthereumNetwork.kovan]: {
      ATOM: '0xaE6738D2f6b9B92B763dfb3F8D793589d8792522', // deployed
      DAI: '0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD',
      USDC: '0xe22da380ee6B445bb8273C81944ADEB6E8450422',
      USDT: '0x13512979ADE267AB5100878E2e0f485B568328a4',
    },
    [eEthereumNetwork.rinkeby]: {
      ATOM: '0xa0944413193a94da2bc6593204b5988f40870ed4', // deployed
      DAI: '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea',
      USDC: '0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b',
      USDT: '0xd9ba894e0097f8cc2bbc9d24d308b98e36dc6d02',
      WETH: '0xc778417e063141139fce010982780140aa0cd5ab',
    },
    [eEthereumNetwork.ropsten]: { 
      ATOM: ZERO_ADDRESS,
      DAI: '0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108',
      USDC: '0x851dEf71f0e6A903375C1e536Bd9ff1684BAD802',
      USDT: '0xB404c51BBC10dcBE948077F18a4B8E553D160084',
    },
    [eEthereumNetwork.goerli]: { 
      ATOM: '0xad3Fd5A0fAf3818DF880c6f18AF4971d2F7F3bB2',
      DAI: '0xD09DDC800FB6B17027EA57f9178887dEb5087b4f',
      USDC: '0x8E13B3cc171e9E91AEf37AB418D7D5543bEf2d70',
      USDT: '0x4884e2a214dc5040f52a41c3f21c765283170b6e',
      WETH:'0x8dcb75952C3e68627141bEF99Cf2A25f1F3270B4'
    },
    [eEthereumNetwork.main]: { 
      ATOM: ZERO_ADDRESS,
      DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    },
    [eEthereumNetwork.tenderlyMain]: { 
      ATOM: ZERO_ADDRESS,
      DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    },
  },
};

export default CosmosConfig;
