require('dotenv').config(); // Load environment variables
const pinataSDK = require('@pinata/sdk');

const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_SECRET_KEY);

async function pinFileToIPFS() {
    // Define your metadata or transaction data here
    const contractMetadata = {
        address: '4068302206717b39da48', // Replace with your contract's address
        symbol: 'TOKEN_SYMBOL', // Replace with the token symbol if applicable
        name: 'Token Name', // Replace with the token name if applicable
        description: 'Description of your contract or token', // Add a description
    };

    // This object will be sent to IPFS
    const fileChunk = {
        path: 'payment_contract_metadata.json', // The filename as it will appear on IPFS
        content: JSON.stringify(contractMetadata) // The content of the file
    };

    try {
        // Pin the file to IPFS
        const result = await pinata.pinFileToIPFS(fileChunk);
        // Log the result, which contains the IPFS hash and other metadata
        console.log("File pinned successfully:", result);
    } catch (error) {
        console.error("Error pinning file to IPFS:", error);
    }
}

// Execute the function
pinFileToIPFS();
