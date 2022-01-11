import { task } from 'hardhat/config';
import { UmeeProtocolDataProviderFactory, UiPoolDataProviderFactory } from '../../types';
import {
  getUmeeProtocolDataProvider,
  getUmeeOracle,
  getUiPoolDataProvider,
} from '../../helpers/contracts-getters';
import { getEthersSigners } from '../../helpers/contracts-helpers';

task('print-reserve-data', 'Prints the Reserve data')
  .addFlag('verify', 'Verify contracts at Etherscan')
  .setAction(async ({ verify }, DRE) => {
    await DRE.run('set-DRE');

    const getFirstSigner = async () => (await getEthersSigners())[0];

    const dataprovider = await getUmeeProtocolDataProvider();

    const oracle = await getUmeeOracle();

    const tokens = [
      { name: 'ATOM', address: '0xad3Fd5A0fAf3818DF880c6f18AF4971d2F7F3bB2' },
      { name: 'DAI', address: '0x4A55a3a00D3AfD19062dCad21B24c09d935f895A' },
      { name: 'USDC', address: '0x3fC84A29104Cef50F360064BEF5Ed0175C2bb80f' },
      { name: 'USDT', address: '0x4884e2a214dc5040f52a41c3f21c765283170b6e' },
    ];

    console.log('ATOM Reserve Data: ');
    const result1 = await dataprovider.getReserveData(tokens[0].address);
    console.log(result1);
    console.log('\n ATOM Reserve Configuration Data: ');
    const result2 = await dataprovider.getReserveConfigurationData(tokens[0].address);
    console.log(result2);
    console.log('\n ATOM User Reserve Data: ');
    const result3 = await dataprovider.getUserReserveData(
      tokens[0].address,
      await (await getFirstSigner()).getAddress()
    );
    console.log(result3);
    console.log('\n ATOM Price');
    const price1 = await oracle.getAssetPrice(tokens[0].address);
    console.log(price1);

    console.log('\n DAI Reserve Data: ');
    const result4 = await dataprovider.getReserveData(tokens[1].address);
    console.log(result4);
    console.log('\n DAI Reserve Configuration Data: ');
    const result5 = await dataprovider.getReserveConfigurationData(tokens[1].address);
    console.log(result5);
    console.log('\n DAI User Reserve Data: ');
    const result6 = await dataprovider.getUserReserveData(
      tokens[1].address,
      await (await getFirstSigner()).getAddress()
    );
    console.log(result6);
    console.log('\n DAI Price');
    const price2 = await oracle.getAssetPrice(tokens[1].address);
    console.log(price2);

    console.log('\n USDC Reserve Data: ');
    const result7 = await dataprovider.getReserveData(tokens[2].address);
    console.log(result7);
    console.log('\n USDC Reserve Configuration Data: ');
    const result8 = await dataprovider.getReserveConfigurationData(tokens[2].address);
    console.log(result8);
    console.log('\n USDC User Reserve Data: ');
    const result9 = await dataprovider.getUserReserveData(
      tokens[2].address,
      await (await getFirstSigner()).getAddress()
    );
    console.log(result9);
    console.log('\n USDC Price');
    const price3 = await oracle.getAssetPrice(tokens[2].address);
    console.log(price3);

    console.log('\n USDT Reserve Data: ');
    const result10 = await dataprovider.getReserveData(tokens[3].address);
    console.log(result10);
    console.log('\n USDT Reserve Configuration Data: ');
    const result11 = await dataprovider.getReserveConfigurationData(tokens[3].address);
    console.log(result11);
    console.log('\n USDT User Reserve Data: ');
    const result12 = await dataprovider.getUserReserveData(
      tokens[3].address,
      await (await getFirstSigner()).getAddress()
    );
    console.log(result12);
    console.log('\n USDT Price');
    const price4 = await oracle.getAssetPrice(tokens[3].address);
    console.log(price4);
  });
