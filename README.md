# Umee Contracts v1

This repository contains the smart contracts source code and markets configuration for Umee Protocol V1. The repository uses Docker Compose and Hardhat as development enviroment for compilation, testing and deployment tasks.

## Kovan Contract Addresses (not final deployment, we still need to reploy some proxy contracts)

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