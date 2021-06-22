// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

import {UToken} from '../../protocol/tokenization/UToken.sol';
import {ILendingPool} from '../../interfaces/ILendingPool.sol';
import {IUmeeIncentivesController} from '../../interfaces/IUmeeIncentivesController.sol';

contract MockUToken is UToken {
  function getRevision() internal pure override returns (uint256) {
    return 0x2;
  }
}
