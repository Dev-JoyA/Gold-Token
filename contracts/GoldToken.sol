// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC20.sol";

contract GoldToken {
    IERC20 public erc20;
    string public name;
    string public symbol;
    uint8 public decimals = 18;
    uint256 private _totalSupply;
    address public owner;

    constructor(address _erc20){
        erc20 = IERC20(_erc20);
        name = "Gold Token";
        symbol = "GTKoin";
        owner = msg.sender;
    }

    mapping(address => uint256) public _balances;
    mapping(address => mapping(address => uint256)) public _allowances;

    modifier onlyOwner {
        require(msg.sender == owner, "Not owner");
        _;
    }


    function totalSupply() public view returns (uint256) {
        return erc20.totalSupply();
    }

    function balanceOf(address account) public view returns (uint256) {
        uint256 value = erc20.balanceOf(account);
        return value;
    }

    function transfer(address to, uint256 amount) public returns (bool) {
       return erc20.transfer(to, amount);
    }

    function allowance(address _owner, address spender) public view returns (uint256) {
        return erc20.allowance(_owner, spender);
    }

    function approve(address spender, uint256 amount) public  returns (bool) {
        return erc20.approve(spender, amount);
    }

    function transferFrom(address from, address to, uint256 amount) public returns (bool) {
        return erc20.transferFrom(from, to, amount);
    }

    function mint(address to, uint256 amount) public  onlyOwner{
        erc20.mint(to, amount);
    }

    function burn(uint256 amount) public onlyOwner {
        erc20.burn(amount);
    }
}