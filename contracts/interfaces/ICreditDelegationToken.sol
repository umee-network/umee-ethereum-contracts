// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

interface ICreditDelegationToken {

  // delegates borrowing power to a user on the specific debt token
  function approveDelegation(address delegatee, uint256 amount) external;

  // returns the borrow allowance of the user
  function borrowAllowance(address fromUser, address toUser) external view returns (uint256);

  // event to show that the Borrow Allowance has been Delegated - or not
  event BorrowAllowanceDelegated(address _sender, address _delegatee, address _assetAddress, uint256 _amount);
}