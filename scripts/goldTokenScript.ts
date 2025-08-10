import hre from "hardhat";

async function main() {
  const { ethers } = hre;

  const [owner, otherAccount] = await ethers.getSigners();

  console.log("Deploying ERC20...");
  const ERC20 = await ethers.getContractFactory("ERC20");
  const deployErc20 = await ERC20.deploy("gttoken", "gtk");
  await deployErc20.waitForDeployment();

  console.log("ERC20 deployed at:", deployErc20.target);

  console.log("Deploying GoldToken...");
  const GoldToken = await ethers.getContractFactory("GoldToken");
  const deployGoldTokenContract = await GoldToken.deploy(deployErc20.target);
  await deployGoldTokenContract.waitForDeployment();

  console.log("GoldToken deployed at:", deployGoldTokenContract.target);

  console.log("Owner address:", owner.address);

  const contractOwner = await deployGoldTokenContract.owner();
  console.log("Contract owner:", contractOwner);

  if (contractOwner.toLowerCase() !== owner.address.toLowerCase()) {
    throw new Error("Owner mismatch! Cannot mint tokens");
  }

  const amount = ethers.parseUnits("1000", 18);

  const mintTx = await deployGoldTokenContract.connect(owner).mint(owner.address, amount);
  await mintTx.wait();

  console.log("Minted", amount.toString(), "to:", owner.address);

  const balance = await deployGoldTokenContract.balanceOf(owner.address);
  console.log("Balance:", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
