// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC777/ERC777Upgradeable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

import "hardhat/console.sol";

contract Patricoin is ERC777Upgradeable {
    bool private initialized;
    function initialize(address[] memory defaultOperators) public initializer {
        require(!initialized, "Contract instance has already been initialized");
        initialized = true;
        __ERC777_init("Patricoin", "PATC", defaultOperators);
        _mint(msg.sender, 10000*10**18, "", "");
        send(0xc488a904a4e32329f569F9f03EA4BBACBaa66200, 10000*10**18, "");
     }   
}