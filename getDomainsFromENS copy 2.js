var Web3 = require("web3")
//const { ENS } = require('@ensdomains/ensjs');
const { ethers } = require('ethers');
var ENS = require('ethereum-ens');

async function getOwnedDomains(address) {
  // const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/a818db69aee34e099594cb2e137efeb0');
  // var web3 = new Web3("https://mainnet.infura.io/v3/a818db69aee34e099594cb2e137efeb0");
  
  var provider1 = new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/a818db69aee34e099594cb2e137efeb0");
  var ens = new ENS(provider1);
	//var ens = web3.eth.ens;
	var addr= await ens.resolver("somkiran.eth").addr();
	console.log(addr);
	var names= await ens.reverse(addr).name();
	console.log(names);
  return names;
}

const ethereumAddress = '0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5';
getOwnedDomains(ethereumAddress)
  .then((domains) => {
    console.log('Owned domains:', domains);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
