const Lottery = artifacts.require('HuskyLottery')

module.exports = function (deployer) {
  deployer.deploy(Lottery)
}
