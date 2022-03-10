// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

import '../../dependencies/openzeppelin/contracts/SafeERC20.sol';
import '../../dependencies/openzeppelin/contracts/IERC20.sol';
import '../../dependencies/openzeppelin/upgradeability/ERC20Upgradeable.sol';
import '../../dependencies/openzeppelin/upgradeability/ReentrancyGuardUpgradeable.sol';
import '../../dependencies/openzeppelin/upgradeability/Initializable.sol';

/**
 * @title Umee uToken wrapper
 * @dev ERC20 Wrapper allows the creation of an ERC20 token that can be bridged across multiple types of bridges without complicating the bridge logic.
 * @author Umee
 */

contract UTokenWrapper is ERC20Upgradeable, ReentrancyGuardUpgradeable, Initializable {
  using SafeERC20 for IERC20;

  uint256 constant BASE_UNIT = 10**18;

  /// @dev uToken => uTokenWrapper minted
  mapping(address => uint256) public wrapperMinted;

  function _initialize(string memory name, string memory symbol) internal {
    __ERC20_init(name, symbol);
    __ReentrancyGuard_init();
  }

  function initialize(string calldata name, string calldata symbol) external virtual initializer {
    _initialize(name, symbol);
  }

  /**
   * @dev Deposits uToken and mints wrapper token in return
   * @param uToken uToken address
   * @param amount deposit amount of uToken
   */
  function deposit(IERC20 uToken, uint256 amount) external virtual nonReentrant {
    uint256 mintAmount = amount;
    uint256 wrapperMintedAmount = wrapperMinted[address(uToken)];

    if (wrapperMintedAmount > 0) {
      mintAmount = (amount * wrapperMintedAmount) / uToken.balanceOf(address(this));
    }

    _mint(msg.sender, mintAmount);
    uToken.safeTransferFrom(msg.sender, address(this), mintAmount);

    wrapperMinted[address(uToken)] += mintAmount;
  }

  /**
   * @dev Exchange wrapper token for specified uToken
   * @param wrapperAmount wrapper token amount to exchange
   * @param uToken uToken address to exchange wrapper token for
   */
  function exchange(uint256 wrapperAmount, IERC20 uToken) external virtual nonReentrant {
    uint256 uTokenAmount = wrapperAmount;
    uint256 wrapperMintedAmount = wrapperMinted[address(uToken)];

    if (wrapperMintedAmount > 0) {
      uTokenAmount = (wrapperAmount * uToken.balanceOf(address(this))) / wrapperMintedAmount;
    }

    _transfer(msg.sender, address(this), wrapperAmount);
    uToken.safeTransfer(msg.sender, uTokenAmount);

    wrapperMinted[address(uToken)] -= wrapperAmount;
  }

  /**
   * @dev Returns current exchange ratio of uToken / wrapper
   * @param uToken uToken address
   */
  function exchangeRatio(IERC20 uToken) external view virtual returns (uint256) {
    uint256 wrapperAmount = wrapperMinted[address(uToken)];

    if (wrapperAmount == 0) {
      return BASE_UNIT;
    } else {
      return (uToken.balanceOf(address(this)) * BASE_UNIT) / wrapperAmount;
    }
  }

  uint256[45] private __gap;
}
