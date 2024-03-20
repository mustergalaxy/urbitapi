const axios = require('axios');

const api_key = 'bv_7qjdgqu9vlspdbkz1dmarggsq0iu4dqlrylc16kbx6qyl';

const getAllDomains = async (address) =>{
//   const address = '0xDDC7ed5d6718bCdbFd3E93d3D75D97cC20e15000';
  try {
    const resp = await axios.get(
      `https://api.unstoppabledomains.com/resolve/domains?owners=${address}`,
      {
        headers: {
          Authorization: `Bearer ${api_key}`
        }
      }
    );

    // console.log(resp.data);
    var domainList = []
    for(i=0;i<=resp.data.data[i].id.length;i++){
        domainList.push(resp.data.data[i].id)
    }
    
    const response = {
        'ud': {
            'domains': domainList,
            'length': domainList.length
        }
    };
    return response

  } catch (error) {
    console.error('Error:', error.message);
  }
}

module.exports = { getAllDomains }
