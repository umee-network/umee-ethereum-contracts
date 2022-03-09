// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

import '../../dependencies/openzeppelin/contracts/SafeERC20.sol';
import '../../dependencies/openzeppelin/contracts/IERC20.sol';
import '../../dependencies/openzeppelin/contracts/ERC20.sol';

/**
 * @title Umee uToken wrapper
 * @dev ERC20 Wrapper allows the creation of an ERC20 token that can be bridged across multiple types of bridges without complicating the bridge logic.
 * @author Umee
 */

contract UTokenWrapper is ERC20 {
  using SafeERC20 for IERC20;

  uint256 constant BASE_UNIT = 10**18;

  /// @dev uToken => uTokenWrapper minted
  mapping(address => uint256) public wrapperMinted;

  /**
   * @dev constructor
   * @param name token name
   * @param symbol token symbol
   */
  constructor(string memory name, string memory symbol) public ERC20(name, symbol) {}

  /**
   * @dev Deposits uToken and mints wrapper token in return
   * @param uToken uToken address
   * @param amount deposit amount of uToken
   */
  function deposit(IERC20 uToken, uint256 amount) external {
    uint256 mintAmount = (amount * BASE_UNIT) / exchangeRatio(uToken);

    _mint(msg.sender, mintAmount);
    uToken.safeTransferFrom(msg.sender, address(this), amount);

    wrapperMinted[address(uToken)] += mintAmount;
  }

  /**
   * @dev Exchange wrapper token for specified uToken
   * @param wrapperAmount wrapper token amount to exchange
   * @param uToken uToken address to exchange wrapper token for
   */
  function exchange(uint256 wrapperAmount, IERC20 uToken) external {
    _transfer(msg.sender, address(this), wrapperAmount);
    uToken.safeTransfer(msg.sender, (wrapperAmount * exchangeRatio(uToken)) / BASE_UNIT);
  }

  /**
   * @dev Returns current exchange ratio of uToken / wrapper
   * @param uToken uToken address
   */
  function exchangeRatio(IERC20 uToken) public view returns (uint256) {
    uint256 wrapperAmount = wrapperMinted[address(uToken)];

    if (wrapperAmount == 0) {
      return BASE_UNIT;
    } else {
      return (uToken.balanceOf(address(this)) * BASE_UNIT) / wrapperAmount;
    }
  }
}
