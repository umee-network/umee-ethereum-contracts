# Kovan Deployment Logs

```
- Enviroment
  - Network : kovan
Migration started

1. Deploy address provider
*** LendingPoolAddressesProvider ***

Network: kovan
tx: 0xadb558c9136d04525a92bbd501b950816e0b83b7e2be61a1d988267a8ceb2d9d
contract address: 0x50486d03c8C76BF4570CAe04d0c3534F662fc0b3
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 1604832

******

Pool Admin 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
Emergency Admin 0xcF56B3442eBC30EDe0838334419b5a80eEa45da8
2. Deploy lending pool
        Deploying new lending pool implementation & libraries...
*** ReserveLogic ***

Network: kovan
tx: 0xe2e937cfa77508f37bdfda914db8c8bc1bf6ee4b806f7893f79984e3c8a40e2f
contract address: 0xB2d63144150A0a5CeBAF56F16Aa7ceD82b8CEE5E
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 176615

******

*** GenericLogic ***

Network: kovan
tx: 0xed5eab1ea8596d9b343ab12377a7dc84cb9cbf7c43362c2bbef8b34b8043c346
contract address: 0xB708D38D3B1b77C3F172c6Ad1F22CAd76c69Bb32
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 855592

******

*** ValidationLogic ***

Network: kovan
tx: 0x93033bba1b64bc26a0950c0998884fd08cd46a3562113c7d0489c046693c6a3b
contract address: 0x9E96F6cDC660A9B40FCa2CAA70396C9067f7fc29
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 1840021

******

*** LendingPool ***

Network: kovan
tx: 0x12aaaabc3ee3aa0aeed87c63c2c6d4d33954400bea9b3f9624bf3a652ec29067
contract address: 0x7EcCb395fbD1E897bE22cF89e045cCB23b26fD97
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 4797724

******

        Setting lending pool implementation with address: 0x7EcCb395fbD1E897bE22cF89e045cCB23b26fD97
        Deploying new configurator implementation...
*** LendingPoolConfigurator ***

Network: kovan
tx: 0x06f9856044457cfba5178bc51a0472568335026e112aa55b665ded9789b5acea
contract address: 0x290b641999A75331555F6Fa8E246CF4411B92934
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 3484637

******

        Setting lending pool configurator implementation with address: 0x290b641999A75331555F6Fa8E246CF4411B92934
*** StableAndVariableTokensHelper ***

Network: kovan
tx: 0xe56d015ce923d39a19d00707480ebe75d7c12f38c5ab5ea24a88e43460e331f4
contract address: 0xE41e3C20f61b4f6D17a2E512107F0a78B2f5aEbd
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 3699862

******

*** UTokensAndRatesHelper ***

Network: kovan
tx: 0x58fe3e8d69188823a54439ab12c781cec5ca57481ce7363c92d06b88f0c72ccc
contract address: 0xB266D1F2a0C9641BB38cFe749Da53C7428b83e21
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 3792708

******

3. Deploy oracles
*** UmeeOracle ***

Network: kovan
tx: 0x702acc50efacd01a0d2f1cb4ff7a2793528d021739fc1df13dc1b75d1c9628f7
contract address: 0xfFaE7588bE42A757cF75e75836136d3b3f168F2b
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 1214064

******

*** LendingRateOracle ***

Network: kovan
tx: 0x0c51fe47183bc0d356e3252d37d54ba776db28c9014352f87c80ac194a5e72ef
contract address: 0xdCAF6d52C08A391F09F786677c43612602d6FE6f
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 345146

******

- Oracle borrow initalization in 1 txs
  - Setted Oracle Borrow Rates for: WETH, DAI, TUSD, USDC, SUSD, USDT, BAT, UMEE, LINK, KNC, MKR, MANA, WBTC, ZRX, SNX, YFI, REN, UNI, ENJ, BUSD
Umee Oracle: 0xdCAF6d52C08A391F09F786677c43612602d6FE6f
Lending Rate Oracle: 0xdCAF6d52C08A391F09F786677c43612602d6FE6f
4. Deploy Data Provider
*** UmeeProtocolDataProvider ***

Network: kovan
tx: 0x7895946424f202e2fb461818346fec3ed05b954dc1d675a2c997a22d02d23398
contract address: 0x5ac44e8baed9796fb7bf4c52E431c5e03C8249CF
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 1555866

******

5. Deploy WETH Gateway
*** WETHGateway ***

Network: kovan
tx: 0x5a29f0a263862c9645ea018babf2bebe574899fefa756f28f02849d28dd889b6
contract address: 0x4Df052094BD67D161FAB496cC753f99c42AffDb8
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 1217607

******

WETHGateway.address 0x4Df052094BD67D161FAB496cC753f99c42AffDb8
        Finished WETHGateway deployment
6. Initialize lending pool
*** StableDebtToken ***

Network: kovan
tx: 0xaa3e2a7ba7def9fac71bb906b0526d82543c5a0f46455db8b66276b88e3b8d42
contract address: 0xF596364b76e1B70A7Ca6B878f9d454DC1b4A91db
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 1716647

******

*** VariableDebtToken ***

Network: kovan
tx: 0x4d65f78c52e3bc13acdc36272a935a54ef1903f1b49f12477a83aa01513d37b7
contract address: 0x20A012693cF92AE091471d06Dc7FeCA84cdC3ea0
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 1421292

******

*** UToken ***

Network: kovan
tx: 0x3c985f2a8fd26202cecfc260342897fb889602ce0b735c29a839560904366331
contract address: 0xBd806CE812C4b3c72BE87f3784110B46bE7534f2
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 2325625

******

*** DelegationAwareUToken ***

Network: kovan
tx: 0xcef0f124cf824daf2a0bbe3c51515594cd44ab8c24320c72dab924c965363979
contract address: 0x9C48b6bCbb4eA2E6AA491Ddace5CC513507eED76
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 2437054

******

*** DefaultReserveInterestRateStrategy ***

Network: kovan
tx: 0x60251bc8c1b47fa871b938c35ccf68b7a28efd221e59a50242777f1e0d06c177
contract address: 0x06D213dB8a2ad73eA05Da1141B81E77C9f220E92
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 790297

******

Strategy address for asset UMEE: 0x06D213dB8a2ad73eA05Da1141B81E77C9f220E92
*** DefaultReserveInterestRateStrategy ***

Network: kovan
tx: 0x15da72acbd7025fe3bec98a8f59c18b28325e395830d16ffaf2b19fe1db28cbe
contract address: 0xD44e7DA745015B1982eD8988cA749ea1167440fC
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 790705

******

Strategy address for asset BAT: 0xD44e7DA745015B1982eD8988cA749ea1167440fC
*** DefaultReserveInterestRateStrategy ***

Network: kovan
tx: 0x8b9f13524cd7f30a2a74cb182efff241d2777ec92379c06b0e99f9db9df0adcd
contract address: 0x849684FA146Ee3dE86174DE22f48C39fC2aA7e93
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 790501

******

Strategy address for asset BUSD: 0x849684FA146Ee3dE86174DE22f48C39fC2aA7e93
*** DefaultReserveInterestRateStrategy ***

Network: kovan
tx: 0x07e746bd7aa1e7478decc41d4c7834d5b08a9281bb6a8ef66a105d6afabf07b2
contract address: 0x40797C1D674AD29992Eb4AcC310610DA93150Ba7
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 790705

******

Strategy address for asset DAI: 0x40797C1D674AD29992Eb4AcC310610DA93150Ba7
Strategy address for asset ENJ: 0xD44e7DA745015B1982eD8988cA749ea1167440fC
*** DefaultReserveInterestRateStrategy ***

Network: kovan
tx: 0x1befcca4918d802e728facdc9d2749265d412657d51dfb352722691ac20c58de
contract address: 0xEf7a35D45bCE94a208c70b1686Fd788F8F9D6DBb
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 790705

******

Strategy address for asset KNC: 0xEf7a35D45bCE94a208c70b1686Fd788F8F9D6DBb
Strategy address for asset LINK: 0xD44e7DA745015B1982eD8988cA749ea1167440fC
Strategy address for asset MANA: 0xD44e7DA745015B1982eD8988cA749ea1167440fC
Strategy address for asset MKR: 0xD44e7DA745015B1982eD8988cA749ea1167440fC
Strategy address for asset REN: 0xD44e7DA745015B1982eD8988cA749ea1167440fC
*** DefaultReserveInterestRateStrategy ***

Network: kovan
tx: 0x430c80b08a012f2a3ffb6aa5d51a1c9fb328c4f94dd3823ffeb45259fea9048e
contract address: 0x8204A772D7484602c2d4B756af94Ce5eCdCE444d
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 790705

******

Strategy address for asset SNX: 0x8204A772D7484602c2d4B756af94Ce5eCdCE444d
Strategy address for asset SUSD: 0x849684FA146Ee3dE86174DE22f48C39fC2aA7e93
Strategy address for asset TUSD: 0x40797C1D674AD29992Eb4AcC310610DA93150Ba7
Strategy address for asset UNI: 0x8204A772D7484602c2d4B756af94Ce5eCdCE444d
*** DefaultReserveInterestRateStrategy ***

Network: kovan
tx: 0x988bdef33dfcd346371120e0c8ef7391f594c63d0f4e15c093f6fc4ba2b3ed8e
contract address: 0x78Ae96686E05796C70f5AD4F39ab42f8e4F36817
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 790705

******

Strategy address for asset USDC: 0x78Ae96686E05796C70f5AD4F39ab42f8e4F36817
Strategy address for asset USDT: 0x78Ae96686E05796C70f5AD4F39ab42f8e4F36817
Strategy address for asset WBTC: 0xEf7a35D45bCE94a208c70b1686Fd788F8F9D6DBb
*** DefaultReserveInterestRateStrategy ***

Network: kovan
tx: 0x4909a7bd17f7eb379d156474884fb03cb97707bf8ba771b326c1ec9089dd8130
contract address: 0xD0A71Fe7e9A5c03269aEefe3e560C2aCd172B879
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 790705

******

Strategy address for asset WETH: 0xD0A71Fe7e9A5c03269aEefe3e560C2aCd172B879
Strategy address for asset YFI: 0xD44e7DA745015B1982eD8988cA749ea1167440fC
Strategy address for asset ZRX: 0xD44e7DA745015B1982eD8988cA749ea1167440fC
- Skipping init of xSUSHI due token address is not set at markets config
- Reserves initialization in 5 txs
  - Reserve ready for: UMEE, BAT, BUSD, DAI
    * gasUsed 7733035
  - Reserve ready for: ENJ, KNC, LINK, MANA
    * gasUsed 7717935
  - Reserve ready for: MKR, REN, SNX, SUSD
    * gasUsed 7717851
  - Reserve ready for: TUSD, UNI, USDC, USDT
    * gasUsed 7720485
  - Reserve ready for: WBTC, WETH, YFI, ZRX
    * gasUsed 7717935
- Skipping init of xSUSHI due token address is not set at markets config
- Configure reserves in 1 txs
  - Init for: UMEE, BAT, BUSD, DAI, ENJ, KNC, LINK, MANA, MKR, REN, SNX, SUSD, TUSD, UNI, USDC, USDT, WBTC, WETH, YFI, ZRX
        Setting lending pool collateral manager implementation with address 0x9269b6453d0d75370c4c85e5a42977a53efdb72a
        Setting UmeeProtocolDataProvider at AddressesProvider at id: 0x01 0x9269b6453d0d75370c4c85e5a42977a53efdb72a
*** WalletBalanceProvider ***

Network: kovan
tx: 0xacad78204c70a987e8a645570b13b26ea966f142f9acf843e41e39c98f2ac0f4
contract address: 0x2B629BF227d5f989d80ECe76388DA6Eb7ffBD657
deployer address: 0xa3e1c2602f628112E591A10094bbD59BDC3cb512
gas price: 1000000000
gas used: 627116

******

GATEWAY 0x4Df052094BD67D161FAB496cC753f99c42AffDb8

Finished migrations
Contracts deployed at kovan
---------------------------------
N# Contracts: 30
LendingPoolAddressesProvider: 0x50486d03c8C76BF4570CAe04d0c3534F662fc0b3
ReserveLogic: 0xB2d63144150A0a5CeBAF56F16Aa7ceD82b8CEE5E
GenericLogic: 0xB708D38D3B1b77C3F172c6Ad1F22CAd76c69Bb32
ValidationLogic: 0x9E96F6cDC660A9B40FCa2CAA70396C9067f7fc29
LendingPoolImpl: 0x7EcCb395fbD1E897bE22cF89e045cCB23b26fD97
LendingPool: 0x34d8619386aEE1d96F68846a801a5e835f130422
LendingPoolConfiguratorImpl: 0x290b641999A75331555F6Fa8E246CF4411B92934
LendingPoolConfigurator: 0x10C044A28EF0Cb10b142B969961429F9c4aEe2dA
StableAndVariableTokensHelper: 0xE41e3C20f61b4f6D17a2E512107F0a78B2f5aEbd
UTokensAndRatesHelper: 0xB266D1F2a0C9641BB38cFe749Da53C7428b83e21
UmeeOracle: 0xfFaE7588bE42A757cF75e75836136d3b3f168F2b
LendingRateOracle: 0xdCAF6d52C08A391F09F786677c43612602d6FE6f
UmeeProtocolDataProvider: 0x5ac44e8baed9796fb7bf4c52E431c5e03C8249CF
WETHGateway: 0x4Df052094BD67D161FAB496cC753f99c42AffDb8
StableDebtToken: 0xF596364b76e1B70A7Ca6B878f9d454DC1b4A91db
VariableDebtToken: 0x20A012693cF92AE091471d06Dc7FeCA84cdC3ea0
UToken: 0xBd806CE812C4b3c72BE87f3784110B46bE7534f2
uTokenImpl: 0xBd806CE812C4b3c72BE87f3784110B46bE7534f2
DelegationAwareUToken: 0x9C48b6bCbb4eA2E6AA491Ddace5CC513507eED76
delegationAwareUTokenImpl: 0x9C48b6bCbb4eA2E6AA491Ddace5CC513507eED76
DefaultReserveInterestRateStrategy: 0xD0A71Fe7e9A5c03269aEefe3e560C2aCd172B879
rateStrategyUMEE: 0x06D213dB8a2ad73eA05Da1141B81E77C9f220E92
rateStrategyVolatileOne: 0xD44e7DA745015B1982eD8988cA749ea1167440fC
rateStrategyStableOne: 0x849684FA146Ee3dE86174DE22f48C39fC2aA7e93
rateStrategyStableTwo: 0x40797C1D674AD29992Eb4AcC310610DA93150Ba7
rateStrategyVolatileTwo: 0xEf7a35D45bCE94a208c70b1686Fd788F8F9D6DBb
rateStrategyVolatileThree: 0x8204A772D7484602c2d4B756af94Ce5eCdCE444d
rateStrategyStableThree: 0x78Ae96686E05796C70f5AD4F39ab42f8e4F36817
rateStrategyWETH: 0xD0A71Fe7e9A5c03269aEefe3e560C2aCd172B879
WalletBalanceProvider: 0x2B629BF227d5f989d80ECe76388DA6Eb7ffBD657
```