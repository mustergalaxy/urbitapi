// https://mainnet-public.mirrornode.hedera.com/api/v1/accounts/0.0.1279034/nfts

const axios = require('axios');
// const { res } = require('pino-std-serializers');

const getHederaAll = async (address) => {
    try {
        // Make a GET request to the URL
        let response = await axios.get(`https://mainnet-public.mirrornode.hedera.com/api/v1/accounts/${address}/nfts`);

        // Extract the data from the response
        const result = response.data.nfts;

         // Modify image URL
        for (let i = 0; i < response.data.nfts.length; i++) {
          result[i].metadata = Buffer.from(result[i].metadata, 'base64').toString('utf-8');
          const image = 'https://ipfs.io/ipfs/'+result[i].metadata;
          result[i].metadata = image
        }
        // console.log(result)
        response = {
          'hbar':{
            'result': result,
            'length':response.data.nfts.length
          }
        }
        return response
    } catch (error) {
        // Handle errors
        console.error('Error fetching NFT data:', error);
        throw error; // You might want to handle errors differently based on your use case
    }
}
// getHederaAll('0.0.1279034')
module.exports = { getHederaAll };