import hre  from 'hardhat'
import { ethers }  from 'ethers'
const { SpCoinLogger, LOG_MODE } = require("./lib/utils/logging");
const { SpCoinERC20Methods } = require("./lib/spCoinTransferMethods");
const { SpCoinDeleteMethods } = require("./lib/spCoinDeleteMethods");
const { SpCoinAddMethods } = require("./lib/spCoinAddMethods");
const { SpCoinReadMethods } = require("./lib/SpCoinReadMethods");
const { SpCoinRewardsMethods } = require("./lib/spCoinRewardsMethods"); 
const { SpCoinStakingMethods } = require("./lib/spCoinStakingMethods"); 
const { second, minute, hour, day, week, year, month , millennium } = require("./lib/spCoinStakingMethods");

class SpCoinClassMethods {
  // constructor(_spCoinContractDeployed) {
    constructor(_spCoinContractDeployed, spCoinABI, spCoinAddress, signer) {
      // console.log(`AAA spCoinAddress = ${spCoinAddress}`)
      // console.log(`AAA spCoinABI = ${JSON.stringify(spCoinABI,null,2)}`)
      // console.log(`AAA signer = ${JSON.stringify(signer,null,2)}`)

      console.log(`AAA ethers = ${JSON.stringify(ethers,null,2)}`)
      const msgSigner = new ethers.Contract(spCoinAddress, spCoinABI, signer);

    // console.log(`spCoinAddress = ${spCoinAddress}`)
    // console.log(`spCoinABI = ${JSON.stringify(spCoinABI,null,2)}`)
    // console.log(`signer = ${JSON.stringify(signer,null,2)}`)
    this.spCoinContractDeployed = _spCoinContractDeployed;
    this.spCoinAddMethods = new SpCoinAddMethods(this.spCoinContractDeployed, msgSigner);
    this.spCoinDeleteMethods = new SpCoinDeleteMethods(this.spCoinContractDeployed);
    this.spCoinERC20Methods = new SpCoinERC20Methods(this.spCoinContractDeployed);
    this.spCoinLogger = new SpCoinLogger(this.spCoinContractDeployed);
    this.spCoinReadMethods = new SpCoinReadMethods(this.spCoinContractDeployed);
    this.spCoinRewardsMethods = new SpCoinRewardsMethods(this.spCoinContractDeployed);
    this.spCoinStakingMethods = new SpCoinStakingMethods(this.spCoinContractDeployed);
  }

  methods = () => {
    return {
      spCoinContractDeployed : this.spCoinContractDeployed,
      spCoinAddMethods       : this.spCoinAddMethods,
      spCoinDeleteMethods    : this.spCoinDeleteMethods,
      spCoinERC20Methods     : this.spCoinERC20Methods,
      spCoinLogger           : this.spCoinLogger,
      spCoinReadMethods      : this.spCoinReadMethods,
      spCoinRewardsMethods   : this.spCoinRewardsMethods,
      spCoinStakingMethods   : this.spCoinStakingMethods
    }
  }
}

export {
  SpCoinClassMethods,
  SpCoinAddMethods,
  SpCoinDeleteMethods,
  SpCoinERC20Methods,
  SpCoinLogger,
  SpCoinReadMethods,
  SpCoinRewardsMethods,
  SpCoinStakingMethods
}
