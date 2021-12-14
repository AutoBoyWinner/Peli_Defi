const RewardPool = artifacts.require("RewardPool");
const LPTokenWrapper = artifacts.require("LPTokenWrapper");
const TokenTimelock = artifacts.require("TokenTimelock");
const IRewardDistributionRecipient = artifacts.require("IRewardDistributionRecipient");

module.exports = function(deployer) {
  deployer.deploy(LPTokenWrapper);
  deployer.link(LPTokenWrapper,IRewardDistributionRecipient,RewardPool);
  deployer.deploy(RewardPool);
  deployer.deploy(TokenTimelock);
};
