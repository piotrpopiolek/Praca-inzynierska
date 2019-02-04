var SoccerToken = artifacts.require("./SoccerToken.sol");
var SoccerTokenSale = artifacts.require("./SoccerTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(SoccerToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(SoccerTokenSale, SoccerToken.address, tokenPrice);
  });
};
