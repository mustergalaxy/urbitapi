const axios = require('axios');
// const { res } = require('pino-std-serializers');


// https://concordium-explorer.nl/mainnet/tokens/.ccd/94767535
const getCcdAll = async (address) => {
    try {
        const data = {
            "owner": address
        }

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.ccddomain.com/api/ccd-domains',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        const response = await axios.request(config);

        console.log(response?.data?.data);

        // fetch image url
        // Modify image URL
        for (let i = 0; i < response?.data?.data.length; i++) {
            let image = 'https://concordium-explorer.nl/mainnet/tokens/.ccd/'+response?.data?.data[i].token;
            response.data.data[i].image = image
        }
        const result = {
            'ccd': {
                'result': response?.data?.data,
                'length': response?.data?.data?.length
            }
        };
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// getCcdAll("3xke2Mu4xR65c9DwzQHzbUtWRBVq2qmB9w3tz47h8CQkit4Rtx")
module.exports = { getCcdAll };
