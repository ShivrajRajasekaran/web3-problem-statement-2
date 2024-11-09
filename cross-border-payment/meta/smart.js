import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import PaymentContract from './artifacts/Payment.json'; // Adjust the path accordingly

function App() {
    const [account, setAccount] = useState(null);

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAccount(accounts[0]);
        }
    };

    useEffect(() => {
        connectWallet();
    }, []);

    return (
        <div>
            <h1>Cross-Border Payment</h1>
            <button onClick={connectWallet}>Connect Wallet</button>
            {account && <p>Connected as: {account}</p>}
        </div>
    );
}

export default App;
