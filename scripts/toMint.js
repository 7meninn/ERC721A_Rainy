const { ethers } = require("hardhat");
const { abi } = require("../artifacts/contracts/rainy.sol/rainy.json")
require("dotenv").config();

async function main() {
    const provider = new ethers.JsonRpcProvider(process.env.SEP_RPC);
    const signer = new ethers.Wallet(process.env.SEP_PRIV_KEY, provider);
    const contract = new ethers.Contract("// Deployed Contract Address", abi, signer);
    await contract.mintFor(signer.address, "2", {value: ethers.parseEther("0.12")});
    console.log(await contract.balanceOf(signer.address));
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});