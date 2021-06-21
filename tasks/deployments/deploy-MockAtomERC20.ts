import { task } from 'hardhat/config';

import { MockAtomERC20Factory } from '../../types';
import { verifyContract } from '../../helpers/contracts-helpers';
import { getFirstSigner } from '../../helpers/contracts-getters';
import { eContractid } from '../../helpers/types';

// TODO: add Task here for Mock Atom ERC20 deployment
const CONTRACT_NAME = 'MockAtomERC20';

task(`deploy-${CONTRACT_NAME}`, `Deploys the ${CONTRACT_NAME} contract`)
  .setAction(async ({}, localBRE) => {
    await localBRE.run('set-DRE');

    if (!localBRE.network.config.chainId) {
      throw new Error('INVALID_CHAIN_ID');
    }

    console.log(`\n- ${CONTRACT_NAME} deployment`);

    const mockAtomERC20 = await new MockAtomERC20Factory(await getFirstSigner()).deploy();

    await mockAtomERC20.deployTransaction.wait();
    console.log(`${CONTRACT_NAME}.address`, mockAtomERC20.address);

    console.log(
      `\tFinished ${CONTRACT_NAME} deployment`
    );
  });