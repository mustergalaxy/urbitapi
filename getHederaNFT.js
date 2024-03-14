// https://mainnet-public.mirrornode.hedera.com/api/v1/accounts/0.0.1279034/nfts

const axios = require('axios');

const getHederaAll = async (address) => {
    try {
        // Make a GET request to the URL
        const response = await axios.get(`https://mainnet-public.mirrornode.hedera.com/api/v1/accounts/${address}/nfts`);

        // Extract the data from the response
        const data = response.data;

        // Return the data
        return data;
    } catch (error) {
        // Handle errors
        console.error('Error fetching NFT data:', error);
        throw error; // You might want to handle errors differently based on your use case
    }
}

module.exports = { getHederaAll };