// import {ethers } from "hardhat";
// const helpers = require("@nomicfoundation/hardhat-network-helpers");

// async function main(){
//     const USDCAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
//     const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";


//     const UNIRouter = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
  
//     const theAddressIFoundWithUSDCAndDAI = "0xf584f8728b874a6a5c7a8d4d387c9aae9172d621";

//     await helpers.impersonateAccount(theAddressIFoundWithUSDCAndDAI);
//     const impersonatedAccount = await ethers.getSigner(theAddressIFoundWithUSDCAndDAI);

//     const UsdcContract = await ethers.getContractAt("IERC20", USDCAddress);
//     const DaiContract = await ethers.getContractAt("IERC20", DAIAddress);

//     const UniRouterContract = await ethers.getContractAt("IUniswap", UNIRouter);

//     let usdcBal = await UsdcContract.balanceOf(impersonatedAccount.address);
//     let daiBal = await DaiContract.balanceOf(impersonatedAccount.address);


//     console.log('impersonneted acct usdc bal BA:', ethers.formatUnits(usdcBal, 6))
//     console.log("impersonneted acct dai bal BA:", ethers.formatUnits(daiBal, 18));

//     console.log("----------------Approving USDC and DAI for the router-----------------");


//     let AmountA = ethers.parseUnits("200000", 6);
//     let AmountB = ethers.parseUnits("200000", 18);

//     let AmountAMin = ethers.parseUnits("190000", 6);
//     let AmountBMin = ethers.parseUnits("190000", 18);

//     let dealine = await helpers.time.latest() + 600;

//     await UsdcContract.connect(impersonatedAccount).approve(UniRouterContract, AmountA);
//     await DaiContract.connect(impersonatedAccount).approve(UniRouterContract, AmountB);

//     console.log("------------------Approval Done -----------------");

//     console.log("----------------Adding Liquidity-----------------");

//     await UniRouterContract.connect(impersonatedAccount).
// }