import { task } from 'hardhat/config';
import { getCurrentUserAccountData } from '../../helpers/contracts-helpers';

task('print-user-account-data', 'Prints the users Account data')
  .addFlag('verify', 'Verify contracts at Etherscan')
  .setAction(async ({ verify }, DRE) => {
    await DRE.run('set-DRE');

    const result = await getCurrentUserAccountData(
      '0x856479e2D1753073e7e994D4463faa2Dfb82bDad',
      '0xa3e1c2602f628112E591A10094bbD59BDC3cb512'
    );
    console.log(result);
  });
