import { eContractid, IReserveParams } from '../../helpers/types';

import { 
  rateStrategyStableOne,
  rateStrategyStableTwo,
  rateStrategyStableThree,
  rateStrategyWETH,
  rateStrategyATOM,
  rateStrategyVolatileOne,
  rateStrategyVolatileTwo,
  rateStrategyVolatileThree,
  rateStrategyVolatileFour,
} from './rateStrategies';


export const strategyDAI: IReserveParams = {
  strategy: rateStrategyStableTwo,
  baseLTVAsCollateral: '7500',
  liquidationThreshold: '8000',
  liquidationBonus: '10500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  reserveDecimals: '18',
  uTokenImpl: eContractid.UToken,
  reserveFactor: '1000'
};

export const strategyUSDC: IReserveParams = {
  strategy: rateStrategyStableThree,
  baseLTVAsCollateral: '8000',
  liquidationThreshold: '8500',
  liquidationBonus: '10500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  reserveDecimals: '6',
  uTokenImpl: eContractid.UToken,
  reserveFactor: '1000'
};

export const strategyUSDT: IReserveParams = {
  strategy: rateStrategyStableThree,
  baseLTVAsCollateral: '7500',
  liquidationThreshold: '8000',
  liquidationBonus: '10500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  reserveDecimals: '6',
  uTokenImpl: eContractid.UToken,
  reserveFactor: '1000',
};

export const strategyATOM: IReserveParams = {
  strategy: rateStrategyATOM,
  baseLTVAsCollateral: '4500',
  liquidationThreshold: '6000',
  liquidationBonus: '10500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  reserveDecimals: '0',
  uTokenImpl: eContractid.UToken,
  reserveFactor: '1000'
};

export const strategyWETH: IReserveParams = {
  strategy: rateStrategyWETH,
  baseLTVAsCollateral: '8000',
  liquidationThreshold: '8250',
  liquidationBonus: '10500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  reserveDecimals: '18',
  uTokenImpl: eContractid.UToken,
  reserveFactor: '1000'
};