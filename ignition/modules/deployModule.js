const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("rainyModule", (m) => {
  const rainy = m.contract("rainy");
  return { rainy };
});

// yarn hardhat ignition deploy ./ignition/modules/deployModule.js --network sepolia
// yarn hardhat verify DeployedAddress --network sepolia