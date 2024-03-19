const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT = process.env.PORT || 3001;
const getEthDomain = require('./getEthDomain'); 
const getHederaDomain = require('./getHbarDomain'); 
const getAptosDomain = require('./getAptosDomain'); 
const getSolDomain = require('./getSolDomain'); 
const getCcdDomain = require('./getCcdDomain'); 
const getBtcDomain = require('./getBtcDomain');
const getUdDomain = require('./getUdDomain');
app.use(cors());


app.get('/domain/bname/:blockchainName/address/:address', async (req, res) => {
  try {
    const { address,blockchainName } = req.params;
    if(blockchainName === 'eth'){
      const domains = await getEthDomain.getAllDomains(address)
      // console.log(nft)
      res.json(domains);
    }
    if(blockchainName === 'hbar'){
      const domains = await getHederaDomain.getAllDomains(address)
      // console.log(nft)
      res.json(domains);
    }
    if(blockchainName === 'apt'){
      const domains = await getAptosDomain.getAllDomains(address)
      // console.log(nft)
      res.json(domains);
    }
    if(blockchainName === 'ccd'){
      const domains = await getCcdDomain.getAllDomains(address)
      // console.log(nft)
      res.json(domains);
    }
    if(blockchainName === 'sol'){
      const domains = await getSolDomain.getSolAllDomains(address)
      // console.log(nft)
      res.json(domains);
    }
    if(blockchainName === 'btc'){
      const domains = await getBtcDomain.getAllDomains(address)
      // console.log(nft)
      res.json(domains);
    }
    if(blockchainName === 'ud'){
      const domains = await getUdDomain.getAllDomains(address)
      // console.log(nft)
      res.json(domains);
    }
    
  } catch (error) {
    console.error('Error resolving address:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
