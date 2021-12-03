import BigNumber from 'bignumber.js';
import {
  oneEther,
  oneRay,
  RAY,
  ZERO_ADDRESS,
  MOCK_CHAINLINK_AGGREGATORS_PRICES,
} from '../../helpers/constants';
import { ICommonConfiguration, eEthereumNetwork } from '../../helpers/types';

// ----------------
// PROTOCOL GLOBAL PARAMS
// ----------------

export const CommonsConfig: ICommonConfiguration = {
  MarketId: 'Cosmos',
  UTokenNamePrefix: 'Umee interest bearing',
  StableDebtTokenNamePrefix: 'Umee stable debt bearing',
  VariableDebtTokenNamePrefix: 'Umee variable debt bearing',
  SymbolPrefix: '',
  ProviderId: 0, // Overriden in index.ts
  ProtocolGlobalParams: {
    TokenDistributorPercentageBase: '10000',
    MockUsdPriceInWei: '5848466240000000',
    UsdAddress: '0x251F24dd29D446931f23C827286467b01A1Cbd0c', // 0x251F24dd29D446931f23C827286467b01A1Cbd0c
    NilAddress: '0x0000000000000000000000000000000000000000',
    OneAddress: '0x0000000000000000000000000000000000000001',
    UmeeReferral: '0',
  },

  // ----------------
  // COMMON PROTOCOL PARAMS ACROSS POOLS AND NETWORKS
  // ----------------

  Mocks: {
    AllAssetsInitialPrices: {
      ...MOCK_CHAINLINK_AGGREGATORS_PRICES,
    },
  },
  // TODO: reorg alphabetically, checking the reason of tests failing
  // TODO: Add ATOM later to this and iUmeePoolAssets
  LendingRateOracleRatesCommon: {
    WETH: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    DAI: {
      borrowRate: oneRay.multipliedBy(0.039).toFixed(),
    },
    USDC: {
      borrowRate: oneRay.multipliedBy(0.039).toFixed(),
    },
    USDT: {
      borrowRate: oneRay.multipliedBy(0.035).toFixed(),
    },
    ATOM: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
  },
  // ----------------
  // COMMON PROTOCOL ADDRESSES ACROSS POOLS
  // ----------------

  // If PoolAdmin/emergencyAdmin is set, will take priority over PoolAdminIndex/emergencyAdminIndex
  // Explicitly add PoolAdminAddresses
  PoolAdmin: {
    [eEthereumNetwork.coverage]: undefined,
    [eEthereumNetwork.buidlerevm]: undefined,
    [eEthereumNetwork.coverage]: undefined,
    [eEthereumNetwork.hardhat]: undefined,
    [eEthereumNetwork.kovan]: '0xB7332A228329896a3B286b8670880A3cA313094d',
    [eEthereumNetwork.rinkeby]: undefined,
    [eEthereumNetwork.ropsten]: undefined,
    [eEthereumNetwork.goerli]: undefined,
    [eEthereumNetwork.main]: undefined,
    [eEthereumNetwork.tenderlyMain]: undefined,
  },
  PoolAdminIndex: 0, // TODO-MAIN: Change Pool Admin Index to reflect our Admin
  EmergencyAdmin: {
    [eEthereumNetwork.hardhat]: undefined,
    [eEthereumNetwork.coverage]: undefined,
    [eEthereumNetwork.buidlerevm]: undefined,
    [eEthereumNetwork.kovan]: undefined,
    [eEthereumNetwork.rinkeby]: undefined,
    [eEthereumNetwork.ropsten]: undefined,
    [eEthereumNetwork.goerli]: undefined,
    [eEthereumNetwork.main]: undefined,
    [eEthereumNetwork.tenderlyMain]: undefined,
  },
  EmergencyAdminIndex: 1,
  ProviderRegistry: {
    [eEthereumNetwork.kovan]: '', // Umee
    [eEthereumNetwork.rinkeby]: '',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.goerli]: '',
    [eEthereumNetwork.main]: '0x52D306e36E3B6B02c153d0266ff0f85d18BCD413', // Aave (TODO-MAIN: replace it)
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.tenderlyMain]: '0x52D306e36E3B6B02c153d0266ff0f85d18BCD413', // Aave (TODO-MAIN: replace it)
  },
  ProviderRegistryOwner: {
    [eEthereumNetwork.kovan]: '', // Kovan Wallet Address
    [eEthereumNetwork.rinkeby]: '', // 0x52D306e36E3B6B02c153d0266ff0f85d18BCD413
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.goerli]: '',
    [eEthereumNetwork.main]: '0xB9062896ec3A615a4e4444DF183F0531a77218AE', // TODO-MAIN: Aave (Aave: Pool Admin V2 - proxy)
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.tenderlyMain]: '0xB9062896ec3A615a4e4444DF183F0531a77218AE', // TODO-MAIN: Aave (Aave: Pool Admin V2 - proxy)
  },
  LendingRateOracle: {
    // Umee borrow rate oracle. Provides the average market borrow rate to be used as a base for the stable borrow rate calculations.
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '0xcD8dF4e5b6A872ABe3c87441EaDAa843C5004A16', // UMEE: 0xAbD4F545Ef563D5aB1F150dB257a67F44bB33B99
    [eEthereumNetwork.rinkeby]: '', //0x5B0E789f78aF11Ba71f9831f5101A52EbA4E8b38
    [eEthereumNetwork.ropsten]: '', // Aave
    [eEthereumNetwork.goerli]: '',
    [eEthereumNetwork.main]: '', //'0x8A32f49FFbA88aba6EFF96F45D8BD1D4b3f35c7D', // Aave
    [eEthereumNetwork.tenderlyMain]: '0x8A32f49FFbA88aba6EFF96F45D8BD1D4b3f35c7D', // Aave
  },
  LendingPoolCollateralManager: {
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '', // UMEE: 0x6f2E90C777973f02D3A4856fA7D21Ff346756769
    [eEthereumNetwork.rinkeby]: '', // 0x0D876e29cA1fA3AE701FE82D81437EF5Ede271C6
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.goerli]: '',
    [eEthereumNetwork.main]: '0xbd4765210d4167CE2A5b87280D9E8Ee316D5EC7C', // Aave (TODO-MAIN: replace it)
    [eEthereumNetwork.tenderlyMain]: '0xbd4765210d4167CE2A5b87280D9E8Ee316D5EC7C', // Aave (TODO-MAIN: replace it)
  },
  LendingPoolConfigurator: {
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '0x98bB1E6f38ad4e47EA482C6AddA8ae3e32C0023d', // UMEE: 0xdb3F692051b5a8341084F169Fd73fB7C892E3000
    [eEthereumNetwork.rinkeby]: '', //0x3B3cB0F9eeE92067D337F0a936F13eA7eEAC71B3
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.goerli]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderlyMain]: '',
  },
  LendingPool: {
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '0xB9D64Ef0136C0678c69B05FEC62C157504c9038F', // UMEE: 0x0cf80168fd89FEA2FE29a00CdCeA3702e6893d50
    [eEthereumNetwork.rinkeby]: '', //0xaFEe5927ff4a4fE6E5867361f2D302e14b873b26
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.goerli]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderlyMain]: '',
  },
  WethGateway: {
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '0x635ef039255729265d136A56712cd645f8c782FA', // UMEE: 0xE40C9719b770Ad3a8f1D239ADE8AB2B6654592D3
    [eEthereumNetwork.rinkeby]: '', //0x1e283dD3211803fFFe912bE59D4Ca24fcb4b1758
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.goerli]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderlyMain]: '',
  },
  TokenDistributor: {
    // InitializableAdminUpgradeabilityProxy (reploy on all networks)
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.kovan]: '0x971efe90088f21dc6a36f610ffed77fc19710708', // Aave (bypass)
    [eEthereumNetwork.rinkeby]: '',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.goerli]: '',
    [eEthereumNetwork.main]: '0xe3d9988f676457123c5fd01297605efdd0cba1ae', // TODO: Aave (token burner address)
    [eEthereumNetwork.tenderlyMain]: '0xe3d9988f676457123c5fd01297605efdd0cba1ae', // TODO: Aave (token burner address)
  },
  UmeeOracle: {
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '0xC10e4329C1A8A496Ed760cFBba569d911c92BbF2', // UMEE: '0x96A2F421D0E1626C0728CaEd5F05cD629D9867dA',
    [eEthereumNetwork.rinkeby]: '0xaA2b1f1C7833Be0bd6BEBB3C41b8aEE605A877d9',
    [eEthereumNetwork.ropsten]: ZERO_ADDRESS,
    [eEthereumNetwork.goerli]: ZERO_ADDRESS,
    [eEthereumNetwork.main]: ZERO_ADDRESS, //'0xA50ba011c48153De246E5192C8f9258A2ba79Ca9', // Aave
    [eEthereumNetwork.tenderlyMain]: '0xA50ba011c48153De246E5192C8f9258A2ba79Ca9', // Aave
  },
  FallbackOracle: {
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '0x50913E8E1c650E790F8a1E741FF9B1B1bB251dfe', // Aave (bypass)
    [eEthereumNetwork.rinkeby]: ZERO_ADDRESS,
    [eEthereumNetwork.ropsten]: ZERO_ADDRESS,
    [eEthereumNetwork.goerli]: ZERO_ADDRESS,
    [eEthereumNetwork.main]: ZERO_ADDRESS,
    [eEthereumNetwork.tenderlyMain]: ZERO_ADDRESS,
  },
  ChainlinkAggregator: {
    [eEthereumNetwork.coverage]: {},
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.buidlerevm]: {},
    [eEthereumNetwork.kovan]: {
      ATOM: '0xd04647B7CB523bb9f26730E9B6dE1174db7591Ad', // TODO: Add
      DAI: '0x22B58f1EbEDfCA50feF632bD73368b2FdA96D541',
      USDC: '0x64EaC61A2DFda2c3Fa04eED49AA33D021AeC8838',
      USDT: '0x0bF499444525a23E7Bb61997539725cA2e928138',
    },
    [eEthereumNetwork.rinkeby]: {
      ATOM: '0xc751E86208F0F8aF2d5CD0e29716cA7AD98B5eF5', // TODO: Add
      DAI: '0x74825DbC8BF76CC4e9494d0ecB210f676Efa001D',
      USDC: '0xdCA36F27cbC4E38aE16C4E9f99D39b42337F6dcf',
      USDT: '0xdCA36F27cbC4E38aE16C4E9f99D39b42337F6dcf',
    },
    [eEthereumNetwork.ropsten]: {
      ATOM: ZERO_ADDRESS,
      DAI: '0x64b8e49baded7bfb2fd5a9235b2440c0ee02971b',
      USDC: '0xe1480303dde539e2c241bdc527649f37c9cbef7d',
      USDT: '0xc08fe0c4d97ccda6b40649c6da621761b628c288',
    },
    [eEthereumNetwork.goerli]: {
      ATOM: '0x0D5Ace903e7253D77D0098CC2D1087a069B9741a',
      DAI: '0x6a1e8423Da366EcdeF120cF658BFeA69a3ee9f63',
      USDC: '0xF7b067FAf3C279A13323C7de8D7cfCf2f7a59FaA',
      USDT: '0x2a9E8fB25Ca358b306A8C33F9e9Fbf7a64523708',
      USD: '0x6a1e8423Da366EcdeF120cF658BFeA69a3ee9f63',
    },
    [eEthereumNetwork.main]: {
      ATOM: ZERO_ADDRESS,
      DAI: '0x773616E4d11A78F511299002da57A0a94577F1f4',
      USDC: '0x986b5E1e1755e3C2440e960477f25201B0a8bbD4',
      USDT: '0xEe9F2375b4bdF6387aa8265dD4FB8F16512A1d46',
    },
    [eEthereumNetwork.tenderlyMain]: {
      ATOM: ZERO_ADDRESS,
      DAI: '0x773616E4d11A78F511299002da57A0a94577F1f4',
      USDC: '0x986b5E1e1755e3C2440e960477f25201B0a8bbD4',
      USDT: '0xEe9F2375b4bdF6387aa8265dD4FB8F16512A1d46',
    },
  },
  ReserveAssets: {
    [eEthereumNetwork.coverage]: {},
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.buidlerevm]: {},
    [eEthereumNetwork.main]: {},
    [eEthereumNetwork.kovan]: {},
    [eEthereumNetwork.goerli]: {},
    [eEthereumNetwork.rinkeby]: {},
    [eEthereumNetwork.ropsten]: {},
    [eEthereumNetwork.tenderlyMain]: {},
  },
  ReservesConfig: {},
  UTokenDomainSeparator: {
    [eEthereumNetwork.coverage]:
      '0x95b73a72c6ecf4ccbbba5178800023260bad8e75cdccdb8e4827a2977a37c820', // Aave
    [eEthereumNetwork.hardhat]:
      '0xbae024d959c6a022dc5ed37294cd39c141034b2ae5f02a955cce75c930a81bf5', // Aave
    [eEthereumNetwork.buidlerevm]:
      '0xbae024d959c6a022dc5ed37294cd39c141034b2ae5f02a955cce75c930a81bf5', // Aave
    [eEthereumNetwork.kovan]: '',
    [eEthereumNetwork.rinkeby]: '',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.goerli]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderlyMain]: '',
  },
  WETH: {
    [eEthereumNetwork.coverage]: '', // deployed in local evm
    [eEthereumNetwork.hardhat]: '', // deployed in local evm
    [eEthereumNetwork.buidlerevm]: '', // deployed in local evm
    [eEthereumNetwork.kovan]: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
    [eEthereumNetwork.rinkeby]: '0xc778417e063141139fce010982780140aa0cd5ab',
    [eEthereumNetwork.ropsten]: '0xc778417e063141139fce010982780140aa0cd5ab',
    [eEthereumNetwork.goerli]: '0x8dcb75952C3e68627141bEF99Cf2A25f1F3270B4',
    [eEthereumNetwork.main]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    [eEthereumNetwork.tenderlyMain]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  },
  WrappedNativeToken: {
    [eEthereumNetwork.coverage]: '', // deployed in local evm
    [eEthereumNetwork.hardhat]: '', // deployed in local evm
    [eEthereumNetwork.buidlerevm]: '', // deployed in local evm
    [eEthereumNetwork.kovan]: '0xd0a1e359811322d97991e03f863a0c30c2cf029c', // Aave
    [eEthereumNetwork.rinkeby]: '0xc778417e063141139fce010982780140aa0cd5ab',
    [eEthereumNetwork.ropsten]: '0xc778417e063141139fce010982780140aa0cd5ab', // Aave
    [eEthereumNetwork.goerli]: '0x8dcb75952C3e68627141bEF99Cf2A25f1F3270B4',
    [eEthereumNetwork.main]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // Aave
    [eEthereumNetwork.tenderlyMain]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // Aave
  },
  ReserveFactorTreasuryAddress: {
    [eEthereumNetwork.coverage]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c', // Aave
    [eEthereumNetwork.hardhat]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c', // Aave
    [eEthereumNetwork.buidlerevm]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c', // Aave
    [eEthereumNetwork.kovan]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c', // Aave
    [eEthereumNetwork.rinkeby]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c',
    [eEthereumNetwork.ropsten]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c', // Aave
    [eEthereumNetwork.goerli]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c',
    [eEthereumNetwork.main]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c', // Aave
    [eEthereumNetwork.tenderlyMain]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c', // Aave
  },
  IncentivesController: {
    [eEthereumNetwork.coverage]: ZERO_ADDRESS,
    [eEthereumNetwork.hardhat]: ZERO_ADDRESS,
    [eEthereumNetwork.buidlerevm]: ZERO_ADDRESS,
    [eEthereumNetwork.kovan]: ZERO_ADDRESS,
    [eEthereumNetwork.rinkeby]: ZERO_ADDRESS,
    [eEthereumNetwork.ropsten]: ZERO_ADDRESS,
    [eEthereumNetwork.goerli]: ZERO_ADDRESS,
    [eEthereumNetwork.main]: ZERO_ADDRESS,
    [eEthereumNetwork.tenderlyMain]: ZERO_ADDRESS,
  },
};
