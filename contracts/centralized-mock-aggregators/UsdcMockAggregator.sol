// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

import {BaseMockAggregator} from './BaseMockAggregator.sol';
import {IChainlinkAggregator} from '../interfaces/IChainlinkAggregator.sol';

contract UsdcMockAggregator is IChainlinkAggregator {
  address public baseMockAddress;

  constructor(address _baseMockAggregator) public {
    baseMockAddress = _baseMockAggregator;
  }

  function latestAnswer() external view override returns (int256) {
    BaseMockAggregator baseContract = BaseMockAggregator(baseMockAddress);
    return baseContract.getUsdcPrice();
  }

  function getAnswer(uint256 roundId) external view override returns (int256) {
    BaseMockAggregator baseContract = BaseMockAggregator(baseMockAddress);
    return baseContract.getUsdcPrice();
  }

  function latestTimestamp() external view override returns (uint256) {
    BaseMockAggregator baseContract = BaseMockAggregator(baseMockAddress);
    return baseContract.latestTimestamp();
  }

  function latestRound() external view override returns (uint256) {
    BaseMockAggregator baseContract = BaseMockAggregator(baseMockAddress);
    return baseContract.latestRound();
  }

  function getTimestamp(uint256 roundId) external view override returns (uint256) {
    return now;
  }
}
