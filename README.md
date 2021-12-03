# Umee Contracts v1

This repository contains the smart contracts source code and markets configuration for Umee Protocol V1. The repository uses Docker Compose and Hardhat as development enviorment for compilation, testing and deployment tasks.

## Kovan Contract Addresses
```
GATEWAY 0xE40C9719b770Ad3a8f1D239ADE8AB2B6654592D3
Contracts deployed at kovan
---------------------------------
N# Contracts: 33
MockAtomERC20: 0xaE6738D2f6b9B92B763dfb3F8D793589d8792522
LendingPoolAddressesProvider: 0xf8038072dC44454A6318aE40832323bfC3085299
ReserveLogic: 0x609aAEc0A0CB732C6b82FBe2A41841f9fD3eab5A
GenericLogic: 0x590a14a2F210D4333D3422020eD569384A930287
ValidationLogic: 0x823703CF952A9069e559C0E9BE8a9263Ec8f67e2
LendingPoolImpl: 0x0cf80168fd89FEA2FE29a00CdCeA3702e6893d50
LendingPool: 0x3526a2fe5dA32d0f0814086848628bF12A1E4417
LendingPoolConfiguratorImpl: 0xdb3F692051b5a8341084F169Fd73fB7C892E3000
LendingPoolConfigurator: 0x4310d799000D09B72CEa0D9eFF481734EE2ced0a
StableAndVariableTokensHelper: 0x3229E8f7a306387AC2f8581AFf690e7e1A35C337
UTokensAndRatesHelper: 0x2343E5Ea41d72afe797848e4f33121D08268C20C
UmeeOracle: 0x96A2F421D0E1626C0728CaEd5F05cD629D9867dA
LendingRateOracle: 0xAbD4F545Ef563D5aB1F150dB257a67F44bB33B99
UmeeProtocolDataProvider: 0x0A749FE5a66e4B3607bD27E6255232f70495C75c
WETHGateway: 0x8001A1356E268cb79ADb23CbaB1340229958e385
StableDebtToken: 0xED4eAB9039B85cDb615cfDFC20f3812D21E43C8c
VariableDebtToken: 0x88378A6da922ceE9E1cAe48B1E45DAbA93AB48bC
UToken: 0x9b25CB4d2314eebC6e00A9871ec0106Ad8742f39
uTokenImpl: 0x9b25CB4d2314eebC6e00A9871ec0106Ad8742f39
DelegationAwareUToken: 0x7519905a428FBD813547BF94bc9Ed876CAD9FAF6
delegationAwareUTokenImpl: 0x7519905a428FBD813547BF94bc9Ed876CAD9FAF6
DefaultReserveInterestRateStrategy: 0xff47Ba93B1e0d5c253F8101aF64F0C3C948ED92D
rateStrategyAAVE: 0x5B7c7f98E96A205c40B31C9d2a136146fCf07c50
rateStrategyVolatileOne: 0x621DC7862DDC48B9b63568Eee6a5B98586Eef913
rateStrategyStableOne: 0xe63B39Ce4ef9fcd778519855D417765448E01d76
rateStrategyStableTwo: 0xa450153227ed26b7b57a1C9D95D30FFA450f7e05
rateStrategyVolatileTwo: 0x5D5bA9a433337f99234a5ec1b76191B00F14fEF5
rateStrategyVolatileThree: 0x09f2765d5ca06C796E1B45F7DfF58EaC17dcBA29
rateStrategyStableThree: 0x173D1A5C0d9a55b5bF3A6cD24acF28a2f1C94301
rateStrategyWETH: 0xff47Ba93B1e0d5c253F8101aF64F0C3C948ED92D
WalletBalanceProvider: 0xfE737771c0d547bb12EabA0074603e12f045613B
rateStrategyATOM: 0x126559404173481e081a53a3De045E012b4a38b2
LendingPoolCollateralManagerImpl: 0x6f2E90C777973f02D3A4856fA7D21Ff346756769
LendingPoolCollateralManager: 0x6f2E90C777973f02D3A4856fA7D21Ff346756769
```
## Rinkeby Contract Addresses
```
Contracts deployed at rinkeby
---------------------------------
N# Contracts: 33
LendingPoolAddressesProvider: 0x25eB6bd3E717b1Ec1940264172bfCd2fe81B06B9
ReserveLogic: 0x060B5127Ebf9aCEFA3246325a0336082e4A9Bf4f
GenericLogic: 0xd1f4ddcEf11b62b93257Dbe9fA62A939ef6af866
ValidationLogic: 0x72d888b7CCe734D2187e364793942E6cF1Cdd5f3
LendingPoolImpl: 0x340537B805773321Ec6b47A1B93d2c515c20c601
LendingPool: 0x24AcbF87Df6DFA3F891dC2B0c1FBF7f5DD9F77D6
LendingPoolConfiguratorImpl: 0xf3FcD8307e89e41c90494858b9Fbaa5F67f378A3
LendingPoolConfigurator: 0xc989383653591B4Ce492E280174d29F07B5FdCD5
StableAndVariableTokensHelper: 0xAC7c412292A893ad0E89b74B91e66FAe965050aF
UTokensAndRatesHelper: 0xf16AAcC6Fc2392736164e630428D864186Ca5F75
UmeeOracle: 0xaA2b1f1C7833Be0bd6BEBB3C41b8aEE605A877d9
LendingRateOracle: 0x29eB6a83DBd1d7cF07dd9d5bC211caE63610D07F
UmeeProtocolDataProvider: 0xB91B3860bBbfe1eEEcC7Dca333836345dBBcf68e
WETHGateway: 0x570e76E1E5B8A035e690F94CdC583633FA77DCb8
StableDebtToken: 0x818E6529e6701cdd1D07d5bAF9D3C771c6235d86
VariableDebtToken: 0xCc231A34997cCD595ac8944db29ac0f2B7740ADd
UToken: 0x24B62929A5ff816A6972018B6628C854De0e2e26
uTokenImpl: 0x24B62929A5ff816A6972018B6628C854De0e2e26
DelegationAwareUToken: 0x1e5CB74A9cD5c66D71d7cf38166F553aB68004e0
delegationAwareUTokenImpl: 0x1e5CB74A9cD5c66D71d7cf38166F553aB68004e0
DefaultReserveInterestRateStrategy: 0xdB3E9074a703E0F1160ebB71076db2e7359da707
rateStrategyAAVE: 0xB03767bE6D452ECc8D4747Ec0929Ba682E3BD3b4
rateStrategyATOM: 0x32958A725f13517203763E897898C26967CA0041
rateStrategyVolatileOne: 0x7ff8009887c2f8b5f61d7a4a796563E0E3A5782C
rateStrategyStableOne: 0x6548D6923F9eF98b2f688258cc51cA4F9e147F32
rateStrategyStableTwo: 0xe93D94e0aF146aB824736Ce7cA3c0F815018a053
rateStrategyVolatileTwo: 0xBe1Ec0869fC803fd0F730187ef4e4788C44d9B4a
rateStrategyVolatileThree: 0xb0De6e861A20Eaf193c6b0a7113341af384E4C02
rateStrategyStableThree: 0xfe0552C31025393A47cFa1CF29aE711a84085352
rateStrategyWETH: 0xdB3E9074a703E0F1160ebB71076db2e7359da707
LendingPoolCollateralManagerImpl: 0x86C80d04447093182098aeF8657Ad957d27E26Fa
LendingPoolCollateralManager: 0x86C80d04447093182098aeF8657Ad957d27E26Fa
WalletBalanceProvider: 0x49348a0943B46A01c9617aB3CBe79031Fc24D852 
```

## Goerli Contract Addresses
```
GATEWAY 0xcE3A7826A08d1a2d97026b82803F3aC69ed19de1
Contracts deployed at goerli
---------------------------------
N# Contracts: 27
LendingPoolAddressesProvider: 0x6ca6669c5d634bAceAf167E7Bf0655653308f0db
ReserveLogic: 0x50c028f15E00f0631C09a4876b2e11289a319E34
GenericLogic: 0x6342c447B900FA61Bc4794EE7996C0b532427091
ValidationLogic: 0x1Ae9dFF4145307cE78450F82b1B76B4EF4461635
LendingPoolImpl: 0xDb266095929c889A54f756952552Fe67B02F00a8
LendingPool: 0x8a5b6D136546Bf8B586E7D05823fFA0947E395fC
LendingPoolConfiguratorImpl: 0x0B1D11af46F06A41e211E4745AEA73A9Ac10D231
LendingPoolConfigurator: 0xB6D3D9ea7016Dd62a0e3f98F77492193225E1792
StableAndVariableTokensHelper: 0x6b9e24Fa93a887596a21ab3d4624342556230E72
UTokensAndRatesHelper: 0xb0499cE118Cb838EDbB4859bbb3b02C15Ab94ecb
WETHMocked: 0xD42912755319665397FF090fBB63B1a31aE87Cee
UmeeOracle: 0x846C95AEdc205c613b8fF98242d38b844f6a0329
LendingRateOracle: 0xEA0ED62595b2a2467D151944503EC33724Dc0be4
UmeeProtocolDataProvider: 0xBF4743209A7afdbD9Dc2C638E5Ad28A7fC1e7010
WETHGateway: 0xcE3A7826A08d1a2d97026b82803F3aC69ed19de1
StableDebtToken: 0x026D5cBD2418f57fc5a0e0e18a3AcCF771028255
VariableDebtToken: 0xF7878ADEc0FccdEF97985C42d46822F78c2c838D
UToken: 0xa4fd46ad817c4B2F266dF1309cd28062d987aA4c
uTokenImpl: 0xa4fd46ad817c4B2F266dF1309cd28062d987aA4c
DefaultReserveInterestRateStrategy: 0x18d439E96E91472cCa2fb95467d6B0b2b442DEAc
rateStrategyATOM: 0xB0EBd197Fc3e1beB7521D6f0F38866F9183B31Cb
rateStrategyStableTwo: 0xECac588862B188286432B7A6083AF3c83D590F70
rateStrategyStableThree: 0x31f627849103D1ae2f55bf589B9F9D412cA60e34
rateStrategyWETH: 0x18d439E96E91472cCa2fb95467d6B0b2b442DEAc
LendingPoolCollateralManagerImpl: 0x589c7dE4277C0d4eE9a4F47a9c08B1F62dbf6D54
LendingPoolCollateralManager: 0x589c7dE4277C0d4eE9a4F47a9c08B1F62dbf6D54
WalletBalanceProvider: 0xCF63f734b6Bd913EF4CDaB1E48dEb8Ddbd0Dcc4a
```

## What is Umee?

Umee is a cross-chain decentralized non-custodial liquidity markets protocol where users can participate as depositors or borrowers. Depositors provide liquidity to the market to earn a passive income, while borrowers are able to borrow in an overcollateralized (perpetually) or undercollateralized (one-block liquidity) fashion.

## Documentation (links are still resolving to Aave links)

The documentation of Umee V1 is in the following [Umee V1 documentation](https://docs.aave.com/developers/v/2.0/) link. At the documentation you can learn more about the protocol, see the contract interfaces, integration guides and audits.

For getting the latest contracts addresses, please check the [Deployed contracts](https://docs.aave.com/developers/v/2.0/deployed-contracts/deployed-contracts) page at the documentation to stay up to date.

A more detailed and technical description of the protocol can be found in this repository, [here](./aave-v2-whitepaper.pdf)

## Audits
-

## Connect with the community

You can join at the Umee [Discord](https://discord.gg/7JsEGaW4kW) channel for asking questions about the protocol or talk about Umee with other peers.

## Getting Started (this is for Aave protocol not Umee)

You can install `@aave/protocol-v2` as an NPM package in your Hardhat, Buidler or Truffle project to import the contracts and interfaces:

`npm install @aave/protocol-v2`

Import at Solidity files:

```
import {ILendingPool} from "@aave/protocol-v2/contracts/interfaces/ILendingPool.sol";

contract Misc {

  function deposit(address pool, address token, address user, uint256 amount) public {
    ILendingPool(pool).deposit(token, amount, user, 0);
    {...}
  }
}
```

The JSON artifacts with the ABI and Bytecode are also included into the bundled NPM package at `artifacts/` directory.

Import JSON file via Node JS `require`:

```
const LendingPoolV2Artifact = require('@aave/protocol-v2/artifacts/contracts/protocol/lendingpool/LendingPool.sol/LendingPool.json');

// Log the ABI into console
console.log(LendingPoolV2Artifact.abi)
```

## Setup

The repository uses Docker Compose to manage sensitive keys and load the configuration. Prior any action like test or deploy, you must run `docker-compose up` to start the `contracts-env` container, and then connect to the container console via `docker-compose exec contracts-env bash`.

Follow the next steps to setup the repository:

- Install `docker` and `docker-compose`
- Create an enviroment file named `.env` and fill the next enviroment variables

```
# Mnemonic, only first address will be used
MNEMONIC=""

# Add Alchemy or Infura provider keys, alchemy takes preference at the config level
ALCHEMY_KEY=""
INFURA_KEY=""


# Optional Etherscan key, for automatize the verification of the contracts at Etherscan
ETHERSCAN_KEY=""

# Optional, if you plan to use Tenderly scripts
TENDERLY_PROJECT=""
TENDERLY_USERNAME=""

```

## Markets configuration

The configurations related with the Umee Markets are located at `markets` directory. You can follow the `IUmeeConfiguration` interface to create new Markets configuration or extend the current Umee configuration.

Each market should have his own Market configuration file, and their own set of deployment tasks, using the Aave market config and tasks as a reference.

## Test

You can run the full test suite with the following commands:

```
# In one terminal
docker-compose up

# Open another tab or terminal
docker-compose exec contracts-env bash

# A new Bash terminal is prompted, connected to the container
npm run test
```

## Deployments

For deploying Umee Protocol V1, you can use the available scripts located at `package.json`. For a complete list, run `npm run` to see all the tasks.

### Kovan deployment

```
# In one terminal
docker-compose up

# Open another tab or terminal
docker-compose exec contracts-env bash

# A new Bash terminal is prompted, connected to the container
npm run umee:kovan:full:migration
```

### Creating A Market
```
1. Duplicate the Umee Market folder
- Update Commons Addresses
- Update Index strategies, reserves, reserveConfigs
- Update ratestrategies and reserveconfigs, if needed

2. Update helpers/configuration file
- import market config
- Update confignames, loadpoolconfig, and getreservesconfigbypool

3. Duplicate umee:mainnet task 
- Update folder
- Add migration script in package.json
```

### Adding Network 
```
Update Following Files to include name + Update Helper-hardhat-config to appropriate gas
modified:   buidler.config.ts
modified:   hardhat.config.ts
modified:   helper-hardhat-config.ts
modified:   helpers/contracts-helpers.ts
modified:   helpers/etherscan-verification.ts
modified:   helpers/types.ts
modified:   markets/amm/commons.ts
modified:   markets/amm/index.ts
modified:   markets/umee/commons.ts
modified:   markets/umee/index.ts
modified:   package.json
modified:   tasks/deployments/deploy-UiPoolDataProvider.ts
modified:   tasks/helpers/deploy-new-asset.ts
```

### Local Fork Testing
```
1. Run npx hardhat node --fork https://eth-rinkeby.alchemyapi.io/v2/your-key
- Create another terminal

2. Update hardhat config file
- Uncomment URL and comment out network URL
- Change chain ID to localhost
- Comment out hardhat account:field

3. Update .env mnemonic to test account

4. Run Migration 
```


### Mainnet fork deployment

You can deploy Umee Protocol V1 in a forked Mainnet chain using Hardhat built-in fork feature:

```
docker-compose run contracts-env npm run umee:fork:main
```

### Deploy UMEE into a Mainnet Fork via console (not configured yet)

You can deploy Umee into the Hardhat console in fork mode, to interact with the protocol inside the fork or for testing purposes.

Run the console in Mainnet fork mode:

```
docker-compose run contracts-env npm run console:fork
```

At the Hardhat console, interact with the Umee protocol in Mainnet fork mode:

```
// Deploy the Aave protocol in fork mode
await run('umee:mainnet')

// Or your custom Hardhat task
await run('your-custom-task');

// After you initialize the HRE via 'set-DRE' task, you can import any TS/JS file
run('set-DRE');

// Import contract getters to retrieve an Ethers.js Contract instance
const contractGetters = require('./helpers/contracts-getters'); // Import a TS/JS file

// Lending pool instance
const lendingPool = await contractGetters.getLendingPool("LendingPool address from 'umee:mainnet' task");

// You can impersonate any Ethereum address
await network.provider.request({ method: "hardhat_impersonateAccount",  params: ["0xb1adceddb2941033a090dd166a462fe1c2029484"]});

const signer = await ethers.provider.getSigner("0xb1adceddb2941033a090dd166a462fe1c2029484")

// ERC20 token DAI Mainnet instance
const DAI = await contractGetters.getIErc20Detailed("0x6B175474E89094C44Da98b954EedeAC495271d0F");

// Approve 100 DAI to LendingPool address
await DAI.connect(signer).approve(lendingPool.address, ethers.utils.parseUnits('100'));

// Deposit 100 DAI
await lendingPool.connect(signer).deposit(DAI.address, ethers.utils.parseUnits('100'), await signer.getAddress(), '0');

```

## Interact with Umee in Mainnet via console (NOT DEPLOYED ON MAINNET YET)

You can interact with Umee at Mainnet network using the Hardhat console, in the scenario where the frontend is down or you want to interact directly. You can check the deployed addresses at https://docs.aave.com/developers/deployed-contracts.

Run the Hardhat console pointing to the Mainnet network:

```
docker-compose run contracts-env npx hardhat --network main console
```

At the Hardhat console, you can interact with the protocol:

```
// Load the HRE into helpers to access signers
run("set-DRE")

// Import getters to instance any Aave contract
const contractGetters = require('./helpers/contracts-getters');

// Load the first signer
const signer = await contractGetters.getFirstSigner();

// Lending pool instance
const lendingPool = await contractGetters.getLendingPool("0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9");

// ERC20 token DAI Mainnet instance
const DAI = await contractGetters.getIErc20Detailed("0x6B175474E89094C44Da98b954EedeAC495271d0F");

// Approve 100 DAI to LendingPool address
await DAI.connect(signer).approve(lendingPool.address, ethers.utils.parseUnits('100'));

// Deposit 100 DAI
await lendingPool.connect(signer).deposit(DAI.address, ethers.utils.parseUnits('100'), await signer.getAddress(), '0');
```