const { getDomainKey, NameRegistryState, performReverseLookup,getAllDomains,reverseLookup	 } =require("@bonfida/spl-name-service");
const { PublicKey,Connection } =require("@solana/web3.js");


const getSolAllDomains= async(address)=>{
    const domainName = "bonfida"; 
    const { pubkey } = await getDomainKey(domainName);

    rpcUrl="https://api.mainnet-beta.solana.com";
    var connection = new Connection(rpcUrl, 'confirmed');
    console.log('Connection to cluster established:', rpcUrl);
    const pubKey = new PublicKey(address);
    const domains = await getAllDomains(connection, pubKey);
    const reqs = domains.map((x) => performReverseLookup(connection, x));
    const resolvedNames = await Promise.all(reqs);

    const response = {
        'sol': {
            'domains': resolvedNames,
            'length': resolvedNames.length
        }
    };
    return response
}

// getSolAllDomains('HKKp49qGWXd639QsuH7JiLijfVW5UtCVY4s1n2HANwEA')
module.exports  = {getSolAllDomains}