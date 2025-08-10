import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import hre from "hardhat";
import { expect } from "chai"; // note: destructure expect from chai

async function deployContract() {
    const _name = "TestToken";
    const _symbol = "TKoin";

    const [owner, otherAccount] = await hre.ethers.getSigners();

    const ERC20 = await hre.ethers.getContractFactory("ERC20");
    const erc20 = await ERC20.deploy(_name, _symbol);
    await erc20.waitForDeployment();

    const GoldToken = await hre.ethers.getContractFactory("GoldToken");
    const goldToken = await GoldToken.deploy(await erc20.getAddress());
    await goldToken.waitForDeployment();

    return { goldToken, erc20, owner, otherAccount, _name, _symbol };
}

describe("GoldToken", function () {
    it("deploys gold token", async function () {
        const { goldToken } = await loadFixture(deployContract);
        expect(await goldToken.name()).to.equal("Gold Token");
        expect(await goldToken.symbol()).to.equal("GTKoin")
    });

    describe("transfer", function () {
        it("should transfer coin", async function () {
            const { goldToken, erc20, owner, otherAccount } = await loadFixture(deployContract);
            const amount = hre.ethers.parseUnits("100", 18);

            const goldTokenAddress = await goldToken.getAddress();

                await erc20.mint(goldTokenAddress, amount);

                await goldToken.transfer(otherAccount.address, amount);

                expect(await erc20.balanceOf(otherAccount.address)).to.equal(amount);

        });
    });
});
