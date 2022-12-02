require("@nomicfoundation/hardhat-toolbox");
require("hardhat-erc1820")
require('@openzeppelin/hardhat-upgrades');
require('@nomiclabs/hardhat-ethers');
const fs = require("fs");

const ALCHEMY_API_KEY = "K2kDbkqoEC1289Psedi_KBxxhN3-bepl"

const GOERLI_PRIVATE_KEY = "4c141273592030a0faf6901da448a4fdbdd66613206289974d3d29654f44789f"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
