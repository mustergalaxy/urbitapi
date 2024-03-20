const { BnsApiClient } = require("@bns-x/client");

const getAllDomains = async (address) => {
    const bns = new BnsApiClient();
    // const address = "SP21WXKE4JSB95WSFGNDNVWE7XTJ5XGJQ7HVZV670";    
    const allNames = await bns.getNamesOwnedByAddress(address);
    
    // const allNames = await bns.getNameDetails('somkiran.btc');
    
    console.log(allNames)
    const response = {
        'btc': {
            'domains': allNames.names,
            'length': allNames.length
        }
    }
    console.log(response)
    return response
}

// getAllDomains('SP21WXKE4JSB95WSFGNDNVWE7XTJ5XGJQ7HVZV670')
module.exports = {getAllDomains}