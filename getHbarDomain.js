// const { getDomainKey, NameRegistryState, performReverseLookup,getAllDomains,reverseLookup	 } =require("@bonfida/spl-name-service");
const axios = require('axios')

const { PublicKey,Connection } =require("@solana/web3.js");

const getAllDomains= async(address)=>{
	// var address = '0.0.1279034'
	let config = {
		method: 'post',
		maxBodyLength: Infinity,
		url: 'https://app.web23.io/resolver/domains/searchDomain',
		headers: { 
		  'Content-Type': 'application/x-www-form-urlencoded'
		},
		data :  'token=jasdjhajshdkajhdsakjdhakjgweydhbd87qye98dihwqh92bewufb8u18chvwb891v8b871uvy819vyy&ownerAddress='+address
	  };
	  
	const resolvedNames=await axios.request(config);
	if(resolvedNames!=null && resolvedNames.data.status===1){
		const data=resolvedNames.data.data;
		const domains=[];
		for(let i=0;i<data.length;i++){
			domains.push(data[i].domainName)
		}
		const response = {
			'hbar':{
				'domains': domains,
				'length': domains.length
			}
		}
		console.log(response)

		return response
	}	
}
// getAllDomains('0.0.1279034')
module.exports  = {getAllDomains}