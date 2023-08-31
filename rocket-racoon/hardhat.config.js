const ALCHEMY_API_KEY = "-XW7VnPxyt_jTVgGE2yI7ioVFKBaBm_r";
const SEPOLIA_PRIVATE_KEY = "050b9d226ef23286da115e24bcbbd6d86e9aeb7cf03c4eb07118262bdabe1b4c";



require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }

  },
};
