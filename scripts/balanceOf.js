const { ethers } = require("hardhat");
const { abi } = require("../artifacts/contracts/rainy.sol/rainy.json");

async function main() {
    const address = '// Address of Contract at Amoy';
    const provider = new ethers.JsonRpcProvider(process.env.AMOY_RPC);
    const signer = new ethers.Wallet(process.env.AMOY_PRIV_KEY, provider);
    const contract = new ethers.Contract(address, abi, signer);
    console.log("Balance Of Called = ", await contract.balanceOf(signer.address));
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});