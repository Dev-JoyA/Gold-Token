# 🪙 GoldToken Smart Contract

**GoldToken** is an ERC-20 compliant token contract that wraps around an existing ERC-20 implementation.  
It leverages the `IERC20` interface and delegates core functionality to another deployed ERC-20 contract, allowing easy extension with custom token parameters.

---

## 📜 Contract Summary

- **Token Name:** Gold Token  
- **Symbol:** GTKoin  
- **Decimals:** 18  
- **Network Deployed On:** Lisk Sepolia Testnet  
- **Contract Address:** [`0x69AD891D4c4F7A1498A8B5d4d0bDa08fe58B36dE`](https://sepolia-blockscout.lisk.com/address/0x69AD891D4c4F7A1498A8B5d4d0bDa08fe58B36dE#code)  

The GoldToken contract does not implement ERC-20 logic directly.  
Instead, it **wraps an existing ERC-20 contract** and uses its methods for:
- Token transfers
- Approvals
- Minting
- Burning

---

## 🔧 Key Features

- **Delegated ERC-20 Operations**  
  All token functions are forwarded to an external ERC-20 contract instance (`erc20`).

- **Standard ERC-20 Interface**  
  Implements `totalSupply`, `balanceOf`, `transfer`, `approve`, `allowance`, and `transferFrom`.

- **Minting & Burning**  
  Includes `mint` and `burn` functions for supply control.

- **Configurable ERC-20 Address**  
  Constructor accepts the address of the ERC-20 implementation to wrap.

---

## 🧱 Tech Stack

- **Solidity:** ^0.8.0  
- **Standards:** ERC-20 (`IERC20`)  
- **Deployed Network:** Lisk Sepolia Testnet

---

## 📂 Functions Overview

| Function                                      | Description                                                          |
|-----------------------------------------------|----------------------------------------------------------------------|
| `totalSupply()`                               | Returns total supply from the wrapped ERC-20 contract                |
| `balanceOf(address account)`                  | Gets token balance for an account                                    |
| `transfer(address to, uint256 amount)`        | Sends tokens to another address                                      |
| `allowance(address owner, address spender)`   | Checks approved token allowance                                      |
| `approve(address spender, uint256 amount)`    | Approves spender to use tokens                                       |
| `transferFrom(address from, address to, uint256 amount)` | Transfers tokens on behalf of another account                        |
| `mint(address to, uint256 amount)`            | Creates new tokens in the wrapped ERC-20 contract                    |
| `burn(uint256 amount)`                        | Destroys tokens from the sender’s balance                            |

---

## ✅ Validations & Rules

- All operations rely on the logic of the underlying ERC-20 contract.
- Mint and burn permissions depend on the wrapped ERC-20’s access control.
- Token metadata (`name`, `symbol`, `decimals`) is fixed at deployment.

---

## 🧾 Contract Structure

```solidity
IERC20 public erc20;                // Wrapped ERC20 contract
string public name = "Gold Token";  // Token name
string public symbol = "GTKoin";    // Token symbol
uint8 public decimals = 18;         // Standard decimal places
address public owner;               // Contract owner
