const { Aptos } = require("@aptos-labs/ts-sdk");

// Create an instance of Aptos
const aptos = new Aptos({
    network: "mainnet", // Specify the network endpoint
});

const getAllDomains = async (accountAddress) => {
    try {
        // Call the method 'getAccountDomains' provided by the Aptos SDK
        const domains = await aptos.getAccountDomains({ accountAddress });
        
        // Handle the result
        console.log(domains);
        // Modify image URL
        var domainList = []
        for (let i = 0; i < domains.length; i++) {
            domainList.push(domains[i].domain+'.apt')
        }
        // Prepare the response object
        const response = {
            'apt': {
                'domains': domainList,
                'length': domainList.length
            }
        };
        
        // Return the response
        return response;
    } catch (error) {
        // Handle errors if any
        console.error("Error:", error);
        throw error; // Re-throw the error to be handled by the caller if necessary
    }
};

module.exports = { getAllDomains };
