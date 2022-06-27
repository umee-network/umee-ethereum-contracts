# Umee Contracts v1

This repository contains the smart contracts source code and markets configuration for Umee Protocol V1. The repository uses Docker Compose and Hardhat as development enviorment for compilation, testing and deployment tasks.

## Goerli Contract Addresses

```
GATEWAY 0x45a3391167ebE3e2772c3B9Be5678E6d4Da6beea
Contracts deployed at goerli
---------------------------------
N# Contracts: 29
LendingPoolAddressesProvider: 0x9Fa3fC8f8Caa1A6E6c91c665F4d5d77c36DA338A
ReserveLogic: 0x7BE168FfBe3a968C57B2408f3d1090DcdDCE2085
GenericLogic: 0x59c84Ca4Bc7808d854ED42b2088721F846F56C0D
ValidationLogic: 0x00DE8B4688E499610D04DfaB5B7847602369388C
LendingPoolImpl: 0xeA08C7bC64cF48bD167DdD978157b78e62d51AC2
LendingPool: 0x75d5e88adf8F3597c7C3e4a930544FB48089C779
LendingPoolConfiguratorImpl: 0x065E787B1b22299d19459BbCFcbd87ED7f117af3
LendingPoolConfigurator: 0x9336e8126C5c0eA88979E14B92C9Ff31E3Be6B95
StableAndVariableTokensHelper: 0xD8A6fc54525Db18d8Ba258eB1aE4565F331c724E
UTokensAndRatesHelper: 0x3Ba1c7e307C3E2c79fc3a27bDFEd22eC8A1812B9
WETHMocked: 0xD42912755319665397FF090fBB63B1a31aE87Cee
UmeeOracle: 0xfB12a70149853D2f7624453579dC849dd23642E6
LendingRateOracle: 0x1E6a71559Ff8940390AE329d2E0B5304C580bd1f
UmeeProtocolDataProvider: 0x39B4C7A33aE63513c01dd1f1E16432DE6EEC00bE
WETHGateway: 0x45a3391167ebE3e2772c3B9Be5678E6d4Da6beea
StableDebtToken: 0x254C0CD415e309B8667F79E00a1164C846c6dF53
VariableDebtToken: 0x88bb5BCebC202920E5702E21811cE2d133b5dc28
UToken: 0x5d20b3800e1759331658970Eb3b3EF2DAEd91CB7
uTokenImpl: 0x5d20b3800e1759331658970Eb3b3EF2DAEd91CB7
DefaultReserveInterestRateStrategy: 0xC40A2f83961191C1fD4dbD12aa87314Bf699AbA0
rateStrategyATOM: 0xCe7eeD4a4Aa662dE92B079BD8038844BbC9191C9
rateStrategyStableTwo: 0x8EE850B90ed80c08b1DEf642B3D9d95725037B1d
rateStrategyStableThree: 0xEBfA9575F8e09D7A17FdF90cB863ee3E7f27f138
rateStrategyWETH: 0xC40A2f83961191C1fD4dbD12aa87314Bf699AbA0
LendingPoolCollateralManagerImpl: 0x5D96E05B7f4FF1279d4d4c0eeC4990968e589B5c
LendingPoolCollateralManager: 0x5D96E05B7f4FF1279d4d4c0eeC4990968e589B5c
WalletBalanceProvider: 0xd63e1a062c3B5008448EaBf3e8e0b1E68f411A6e
LendingPoolAddressesProviderRegistry: 0x7463c6738cd62b2b6B0850a308caAF7A415428f8
UiPoolDataProvider: 0x89a0055F9a96B23bE97e3f3E323b828623D38057
```

## What is Umee?

Umee is a cross-chain decentralized non-custodial liquidity markets protocol where users can participate as depositors or borrowers. Depositors provide liquidity to the market to earn a passive income, while borrowers are able to borrow in an overcollateralized (perpetually) or undercollateralized (one-block liquidity) fashion.

## Documentation

The documentation of Umee V1 is in the following [Umee V1 documentation](https://umeeversity.umee.cc/developers/ethereum-contracts.html) link. At the documentation you can learn more about the protocol, see the contract interfaces, integration guides and audits.

For getting the latest contracts addresses, please check the [Deployed contracts](https://umeeversity.umee.cc/developers/ethereum-contracts.html) page at the documentation to stay up to date.

## Connect with the community

You can join at the Umee [Discord](https://discord.gg/Umee) channel for asking questions about the protocol or talk about Umee with other peers.

## Getting Started (this is for protocol not Umee)

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
