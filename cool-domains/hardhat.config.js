require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env"})


const ALCHEMY_MUMBAI_URL =  process.env.ALCHEMY_MUMBAI_URL ;
const TEST_WALLET_PRIVATE_KEY = process.env.TEST_WALLET_PRIVATE_KEY ;

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: ALCHEMY_MUMBAI_URL,
      accounts: [TEST_WALLET_PRIVATE_KEY],
    }
  }
};