import { buildModule } from "@nomicfoundation/hardhat-ignition/modules"


const coinName = "NEW TOKEN";
const coinSymbol = "NTKoin";
const ERC20Module = buildModule("ERC20Module", (m) => {

    const name = m.getParameter("_name", coinName);
    const symbol = m.getParameter("_symbol", coinSymbol);

    const erc20 = m.contract("ERC20", [name, symbol]);

    return {erc20}
})

export default ERC20Module;

