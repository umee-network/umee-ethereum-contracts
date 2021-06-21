import { task } from 'hardhat/config';
import { getUmeeProtocolDataProvider } from '../../helpers/contracts-getters';

task('print-config:fork', 'Deploy development enviroment')
  .addFlag('verify', 'Verify contracts at Etherscan')
  .setAction(async ({ verify }, DRE) => {
    await DRE.run('set-DRE');
    await DRE.run('umee:mainnet');

    const dataProvider = await getUmeeProtocolDataProvider();
    await DRE.run('print-config', { dataProvider: dataProvider.address, pool: 'Umee' });
  });
