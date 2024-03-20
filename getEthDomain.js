const Web3 = require('web3');
const ENS = require('ethereum-ens');


const getAllDomains = async (address) => {
    try {
        // Initialize Web3 with Infura provider
        const provider = new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/a818db69aee34e099594cb2e137efeb0");	
        const web3 = new Web3(provider);
        // Initialize ENS
        const ens = new ENS(web3);
        // Reverse lookup for ENS name
        const name = await ens.reverse(address).name();
        console.log(name)
		const response = {
			'eth': {
                'domains': [name],
                'length': [name].length
            }
		}
		console.log(response)
		return response
    } catch (error) {
        console.error("Error occurred:", error);
        // Handle error here if needed
    }
};

module.exports  = {getAllDomains}
// getAllDomains('0xA9350E3b4Ad3f22bab136cfEf999C132eAD3bCA3')
// 0xA9350E3b4Ad3f22bab136cfEf999C132eAD3bCA3	