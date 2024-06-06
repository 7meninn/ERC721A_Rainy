require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: process.env.SEP_TEST_RPC,
      chainId:11155111,
      accounts:[process.env.SEP_PRIV_KEY]
    },
    localhost: {
      url: process.env.LOC_RPC,
      accounts:[process.env.LOC_PRIV_KEY]
    }
  }
};
