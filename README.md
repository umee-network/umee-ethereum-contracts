# Umee Contracts v1

This repository contains the smart contracts source code and markets configuration for Umee Protocol V1. The repository uses Docker Compose and Hardhat as development enviroment for compilation, testing and deployment tasks.

## Kovan Contract Addresses (not final deployment, we still need to reploy some proxy contracts)

```
GATEWAY 0xCA7bB285e0C714A054e9c73FA648D7FC2bD7A4Ce

Finished migrations
Contracts deployed at kovan
---------------------------------
N# Contracts: 32
MockAtomERC20: 0xaE6738D2f6b9B92B763dfb3F8D793589d8792522

LendingPoolAddressesProvider: 0x44e928c01781F921C5bfcec958220c14d4D335E8
ReserveLogic: 0x73CaeC958fA9142959ca6111f75ca5CC3A6e3a94
GenericLogic: 0x7D671be1daC863C23aed0d8F1b600c861A8514Cf
ValidationLogic: 0xBcc6D456885D0C9584B164d780E1B88F1C3f9744
LendingPoolImpl: 0xab20e647EaF1a25C49FCcE14375dBC4E2519a78a
LendingPool: 0x093D777cBD37B8cAD1463B64f4DdFF4b7A8e463d
LendingPoolConfiguratorImpl: 0x3E6e909d5D03e50DF1Bb9aC4eE365f03B9356F59
LendingPoolConfigurator: 0xd16e6Df6F53480A0793380059A600fd69Bc03a43
StableAndVariableTokensHelper: 0x46598cb60E24F24e450182d2be55962574230A66
UTokensAndRatesHelper: 0xb66F22F7C0CDD911dC6E3dB8F4fbc41451320EB5
UmeeOracle: 0x326B93E67c1C4015401c0dB89fBCE293B3D5D3aa
LendingRateOracle: 0xE705768DDE1cc46b71bCE00e174c2065f10a649A
UmeeProtocolDataProvider: 0x81ED149080fE37A893C7Ec12BC5B7b76b533131a
WETHGateway: 0xCA7bB285e0C714A054e9c73FA648D7FC2bD7A4Ce
StableDebtToken: 0x9F39d5ad6E0e2c57c9939FE218B258A05654894A
VariableDebtToken: 0x2ab6cBb911e4aeb67E499BbdD1145c100f8710C6
UToken: 0xfcb1fB0931329611EBe2dDe88D531CB8fEC67bf0
uTokenImpl: 0xfcb1fB0931329611EBe2dDe88D531CB8fEC67bf0
DelegationAwareUToken: 0x46d41E29a6652996cFb7b8a9cf216E4124cd1C54
delegationAwareUTokenImpl: 0x46d41E29a6652996cFb7b8a9cf216E4124cd1C54
DefaultReserveInterestRateStrategy: 0xEa388fAf1ec6f25b68a4E91D1CCe1AA23Ebf732d
rateStrategyAAVE: 0x1212eDB3baB3D53F8E4d5333a74E10946CEe3dd3
rateStrategyVolatileOne: 0x2a594505Af6DA761B7fE5Dec3cb6ACbBFd4e7489
rateStrategyStableOne: 0x62c5534d1cB93327944F263CEBB3Ac969Ab6e32F
rateStrategyStableTwo: 0x2b679A155d0Cdc007632545539F187C5E61239De
rateStrategyVolatileTwo: 0x96e2d9Db032d5a17dd519212B50bef23da22D2da
rateStrategyVolatileThree: 0xe0C14f76b65fB07A3351B9bC05b4e2c33e9D8fA0
rateStrategyStableThree: 0xDb957a89082E280e64f0ae101A58fCCd187a5D54
rateStrategyWETH: 0xEa388fAf1ec6f25b68a4E91D1CCe1AA23Ebf732d
WalletBalanceProvider: 0x49A99EcCE0d6696777bEdBa9af1cB126eb0E8FA6
rateStrategyATOM: 0x590DF552D6c882ca579644643F04D7ED65a0A715
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