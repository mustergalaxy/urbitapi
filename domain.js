const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT = process.env.PORT || 3001;
const getDomainsFromENS = require('./getDomainsFromENS');
const getEthDomain = require('./getEthNft'); 
const getHederaDomain = require('./getHederaNft'); 
const getAptosDomain = require('./getAptosNft'); 
const getSolDomain = require('./getSolNft'); 
const getCcdDomain = require('./getCcdNft'); 
app.use(cors());

// Route to get a specific user by ID
app.get('/address/:ensName', async (req, res) => {
  try {
    const { ensName } = req.params;
    const address = await getDomainsFromENS.resolve(ensName);
    res.json({ address });
  } catch (error) {
    console.error('Error resolving ENS name:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.get('/nft/bname/:blockchainName/address/:address', async (req, res) => {
  try {
    const { address,blockchainName } = req.params;
    if(blockchainName === 'eth'){
      const domain = await getEthDomain.getEthAll(address)
      // console.log(nft)
      res.json({ domain });
    }
    if(blockchainName === 'hbar'){
      const domain = await getHederaDomain.getHederaAll(address)
      // console.log(nft)
      res.json({ domain });
    }
    if(blockchainName === 'apt'){
      const domain = await getAptosDomain.getAptosAll(address)
      // console.log(nft)
      res.json({ domain });
    }
    if(blockchainName === 'ccd'){
      const domain = await getCcdDomain.getCcdAll(address)
      // console.log(nft)
      res.json({ domain });
    }
    if(blockchainName === 'sol'){
      const domain = await getSolDomain.getSolNFT(address)
      // console.log(nft)
      res.json({ domain });
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
