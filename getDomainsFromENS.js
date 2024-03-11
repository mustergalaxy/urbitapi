var Web3 = require("web3")
const { ENS } = require('@ensdomains/ensjs');
const { ethers } = require('ethers');

const resolve = async (ensName) => {
  var web3 = new Web3("https://mainnet.infura.io/v3/a818db69aee34e099594cb2e137efeb0");
  var ens = web3.eth.ens;

  //var address = await ens.getAddress('apple.eth');
  var address = await ens.getAddress(ensName);
  //var address = await ens.getAddress('bossrahul.test');
  console.log("address")
  console.log(address);
  return address;
}

module.exports = { resolve };
