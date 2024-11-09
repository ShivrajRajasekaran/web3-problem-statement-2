require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    // Other networks can be here
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`, // Replace with your provider's URL if different
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
