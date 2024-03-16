const axios = require('axios');
// const { res } = require('pino-std-serializers');


// https://concordium-explorer.nl/mainnet/tokens/.ccd/94767535
const getAllDomains = async (address) => {
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
        var domainList = []
        //console.log(response.data.data[0]?.domain)
        for(i=0;i<=response.data?.data?.length;i++){
            if(response.data.data[i]?.domain!=undefined || response.data.data[i]?.domain!=null)
            domainList.push(response.data.data[i]?.domain)
        }
        console.log(domainList)
        
        const result = {
            'ccd': {
                'domains': domainList,
                'length': domainList.length
            }
        };
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// getCcdAll("3xke2Mu4xR65c9DwzQHzbUtWRBVq2qmB9w3tz47h8CQkit4Rtx")
module.exports = { getAllDomains };
