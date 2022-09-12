

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

// https://eth-rinkeby.alchemyapi.io/v2/kDQOQm9KdvBhqZ-gLowwSAEl_Ys6sD_r

module.exports={
  solidity:'0.8.0',
  networks:{
    rinkibey: {
      url:'https://eth-rinkeby.alchemyapi.io/v2/kDQOQm9KdvBhqZ-gLowwSAEl_Ys6sD_r',
      accounts:['abbba63e73dd0334b536892f08c8c92467eb3605c5f201d8a78a753889425737'],
    },
  },

};