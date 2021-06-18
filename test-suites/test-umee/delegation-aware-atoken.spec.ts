import { MAX_UINT_AMOUNT, ZERO_ADDRESS } from '../../helpers/constants';
import { BUIDLEREVM_CHAINID } from '../../helpers/buidler-constants';
import { buildPermitParams, getSignatureFromTypedData } from '../../helpers/contracts-helpers';
import { expect } from 'chai';
import { ethers } from 'ethers';
import { ProtocolErrors } from '../../helpers/types';
import { makeSuite, TestEnv } from './helpers/make-suite';
import { DRE } from '../../helpers/misc-utils';
import {
  ConfigNames,
  getUTokenDomainSeparatorPerNetwork,
  getTreasuryAddress,
  loadPoolConfig,
} from '../../helpers/configuration';
import { waitForTx } from '../../helpers/misc-utils';
import {
  deployDelegationAwareUToken,
  deployMintableDelegationERC20,
} from '../../helpers/contracts-deployments';
import { DelegationAwareUTokenFactory } from '../../types';
import { DelegationAwareUToken } from '../../types/DelegationAwareUToken';
import { MintableDelegationERC20 } from '../../types/MintableDelegationERC20';
import UmeeConfig from '../../markets/umee';

const { parseEther } = ethers.utils;

makeSuite('UToken: underlying delegation', (testEnv: TestEnv) => {
  const poolConfig = loadPoolConfig(ConfigNames.Commons);
  let delegationUToken = <DelegationAwareUToken>{};
  let delegationERC20 = <MintableDelegationERC20>{};

  it('Deploys a new MintableDelegationERC20 and a DelegationAwareUToken', async () => {
    const { pool } = testEnv;

    delegationERC20 = await deployMintableDelegationERC20(['DEL', 'DEL', '18']);

    delegationUToken = await deployDelegationAwareUToken(
      [
        pool.address,
        delegationERC20.address,
        await getTreasuryAddress(UmeeConfig),
        ZERO_ADDRESS,
        'aDEL',
        'aDEL',
      ],
      false
    );

    //await delegationUToken.initialize(pool.address, ZERO_ADDRESS, delegationERC20.address, ZERO_ADDRESS, '18', 'aDEL', 'aDEL');

    console.log((await delegationUToken.decimals()).toString());
  });

  it('Tries to delegate with the caller not being the Umee admin', async () => {
    const { users } = testEnv;

    await expect(
      delegationUToken.connect(users[1].signer).delegateUnderlyingTo(users[2].address)
    ).to.be.revertedWith(ProtocolErrors.CALLER_NOT_POOL_ADMIN);
  });

  it('Tries to delegate to user 2', async () => {
    const { users } = testEnv;

    await delegationUToken.delegateUnderlyingTo(users[2].address);

    const delegateeAddress = await delegationERC20.delegatee();

    expect(delegateeAddress).to.be.equal(users[2].address);
  });
});
