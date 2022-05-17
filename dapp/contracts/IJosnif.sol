//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

interface IJosnif {
    /// @dev the token id of the contract owner by its index
    function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256 tokenId);

    /// @dev Returns the number of tokens in ``owner``'s account.
    function balanceOf(address owner) external view returns (uint256 balance);
}