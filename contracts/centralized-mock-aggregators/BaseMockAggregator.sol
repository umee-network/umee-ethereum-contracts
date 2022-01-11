// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

import {IChainlinkAggregator} from '../interfaces/IChainlinkAggregator.sol';
import {Ownable} from '../dependencies/openzeppelin/contracts/Ownable.sol';

contract BaseMockAggregator is IChainlinkAggregator, Ownable {
  uint256 private round;
  uint256 private varLatestTimestamp;
  int256 private currentWethPrice;
  int256 private currentDaiPrice;
  int256 private currentAtomPrice;
  int256 private currentUsdcPrice;
  int256 private currentUsdtPrice;

  event UpdatedWethPrice(int256 indexed currentWethPrice, uint256 indexed timestamp);
  event UpdatedAtomPrice(int256 indexed currentDaiPrice, uint256 indexed timestamp);
  event UpdatedDaiPrice(int256 indexed currentAtomPrice, uint256 indexed timestamp);
  event UpdatedUsdcPrice(int256 indexed currentUsdcPrice, uint256 indexed timestamp);
  event UpdatedUsdtPrice(int256 indexed currentUsdtPrice, uint256 indexed timestamp);

  constructor() public {
    round = 0;
  }

  function updatePrices(
    uint256 _newWethPrice,
    uint256 _newDaiPrice,
    uint256 _newAtomPrice,
    uint256 _newUsdcPrice,
    uint256 _newUsdtPrice
  ) public onlyOwner {
    currentWethPrice = int256(_newWethPrice);
    currentDaiPrice = int256(_newDaiPrice);
    currentAtomPrice = int256(_newAtomPrice);
    currentUsdcPrice = int256(_newUsdcPrice);
    currentUsdtPrice = int256(_newUsdtPrice);

    round = round + 1;
    varLatestTimestamp = now;

    emit UpdatedWethPrice(currentWethPrice, now);
    emit UpdatedDaiPrice(currentDaiPrice, now);
    emit UpdatedAtomPrice(currentAtomPrice, now);
    emit UpdatedUsdcPrice(currentUsdcPrice, now);
    emit UpdatedUsdtPrice(currentUsdtPrice, now);
  }

  function getWethPrice() public view returns (int256) {
    return currentWethPrice;
  }

  function getDaiPrice() public view returns (int256) {
    return currentDaiPrice;
  }

  function getAtomPrice() public view returns (int256) {
    return currentAtomPrice;
  }

  function getUsdcPrice() public view returns (int256) {
    return currentUsdcPrice;
  }

  function getUsdtPrice() public view returns (int256) {
    return currentUsdtPrice;
  }

  function latestAnswer() external view override returns (int256) {
    return getDaiPrice();
  }

  function getAnswer(uint256 roundId) external view override returns (int256) {
    return getDaiPrice();
  }

  function latestTimestamp() external view override returns (uint256) {
    return varLatestTimestamp;
  }

  function latestRound() external view override returns (uint256) {
    return round;
  }

  function getTimestamp(uint256 roundId) external view override returns (uint256) {
    return now;
  }
}
