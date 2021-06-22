// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

import {ERC20} from '../../dependencies/openzeppelin/contracts/ERC20.sol';

/**
 * @title Mock Atom ERC20
 * @dev Atom ERC20
 */
contract MockAtomERC20 is ERC20 {

  uint constant MAX_AMOUNT = 2^256-1;

  constructor() public ERC20("ATOM", "ATOM") {}
  
  /**
   * @dev Function to mint tokens
   * @param value The amount of tokens to mint.
   * @return A boolean that indicates if the operation was successful.
   */
  function mint(uint256 value) public returns (bool) {
    require((totalSupply() + value) < MAX_AMOUNT, "Reached the Max Amount of ATOM tokens");
    _mint(_msgSender(), value);
    return true;
  }
}