// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

import {ERC20} from '../../dependencies/openzeppelin/contracts/ERC20.sol';

/**
 * @title Mock Atom ERC20
 * @dev Atom ERC20
 */
contract MockAtomERC20 is ERC20 {
  constructor() public ERC20('ATOM', 'ATOM') {
    _setupDecimals(0);
  }

  /**
   * @dev Function to mint tokens
   * @param value The amount of tokens to mint.
   * @return A boolean that indicates if the operation was successful.
   */
  function mint(uint256 value) public returns (bool) {
    _mint(_msgSender(), value);
    return true;
  }
}
