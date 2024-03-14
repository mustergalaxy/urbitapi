const Moralis = require("moralis").default;

// 0xFcB6BC97B09e01caF88C0738E0E25943C8Bc8a51
const getEthAll = async (address) =>{
	try {
  await Moralis.start({
    apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjZmMDkxYmJhLThhZWYtNDEwZi05MGMyLWU4ZTIwYzRkMjUzZSIsIm9yZ0lkIjoiMzM2OTA4IiwidXNlcklkIjoiMzQ2MzgyIiwidHlwZUlkIjoiYTIzZWE5YjMtMjY1NS00ZjZmLThmMTQtNjdhNDk0ZDI4NDE3IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODQ5MjQxNDAsImV4cCI6NDg0MDY4NDE0MH0.hpvWsrLq2lFW2jri5uL_CXREoSWQkwPgM64MgwDzKEU"
  });

  let response = await Moralis.EvmApi.nft.getWalletNFTs({
    "chain": "0x1",
    "format": "decimal",
    "mediaItems": true,
    "address": address
  });

  result = response.raw.result
  
  // Modify image URL
  for (let i = 0; i < response.raw.result.length; i++) {
    const parsedData = JSON.parse(result[i].metadata);
    let image_url = parsedData.image
    image_url = image_url.split('/')
    parsedData.image = 'https://ipfs.io/ipfs/'+image_url[2];
    result[i].metadata = parsedData
      }

  response = {
    'eth':{
      'result': result,
      'length':response.raw.result.length
    }
  }
  return response
} catch (e) {
  console.error(e);
}
}
// https://ipfs.io/ipfs/Qma4dQUN9N43A7BeMPQf3P8wvc6vi9zjBGfpPAeK9hpuRi
// getAll().then(null);
// getEthAll('0xFcB6BC97B09e01caF88C0738E0E25943C8Bc8a51').then(null);
module.exports = { getEthAll };