import { buildModule } from "@nomicfoundation/hardhat-ignition/modules"

const erc20 = "0x4FE5175d59B3514CF00D47D228e7C3EAFA6b0836"

const GoldTokenModule = buildModule("GoldTokenModule", (m) => {

    const erc20Address = m.getParameter("_erc20", erc20);

    const goldToken = m.contract("GoldToken", [erc20Address]);

    return { goldToken }
})

export default GoldTokenModule;
