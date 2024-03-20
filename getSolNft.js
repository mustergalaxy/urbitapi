const { Connection, PublicKey } = require('@solana/web3.js');

// Initialize connection to the Solana cluster
const connection = new Connection('https://api.mainnet-beta.solana.com');

const getSolanaTokens = async (address) => {
    try {
        // Convert the account address to a PublicKey
        const publicKey = new PublicKey(address);

        // Get token accounts by owner
        const tokenAccounts = await connection.getTokenAccountsByOwner(publicKey);

        console.log(tokenAccounts);

        const result = {
            'sol': {
                'result': tokenAccounts,
                'length': tokenAccounts.length
            }
        };

        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = { getSolanaTokens };
