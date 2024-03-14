const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT = process.env.PORT || 3001;
const getDomainsFromENS = require('./getDomainsFromENS');
const getEthNFT = require('./getEthNFT'); 

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

app.get('/nft/:address', async (req, res) => {
  try {
    const { address } = req.params;
    const nft = await getEthNFT.getEthAll(address)
    // console.log(nft)
    res.json({ nft });
  } catch (error) {
    console.error('Error resolving address:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
