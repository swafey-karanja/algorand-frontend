import React, { useState } from 'react';
import './style.css';

const LoginPage = () => {
  const [walletId, setWalletId] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  // ... (existing event handlers)

  const connectWallet = async () => {
    try {
      // Code to connect to the user's wallet
      // This will depend on the blockchain library you're using
      // Example for Web3.js:
      // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      // setWalletId(accounts[0]);
      // setIsConnected(true);
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <div className='loginPage'>
      <div className="container">
        <h2 className='header'>Login</h2>
        <hr className="line" />
        <p>
          You will have to connect your blockchain wallet to access this sight.
        </p>
        {!isConnected ? (
            <button className='submit' onClick={connectWallet}>
            CONNECT YOUR WALLET
          </button>
        ) : (
          <div className="wallet">
            <p>Wallet ID: {walletId}</p>
          </div>
        )}
        
        </div>
    </div>
  );
};

export default LoginPage;