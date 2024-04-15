import React, { useState } from 'react';
import './login.css';

const LoginPage = () => {
  const [walletId, setWalletId] = useState('');

  const handleWalletIdChange = (event) => {
    setWalletId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can implement the logic to authenticate the user
    // with the provided wallet ID using the blockchain technology
    console.log('Wallet ID:', walletId);
  };

  return (
    <div className='loginPage'>
      <h2 className='header'>Login</h2>
      <form className='form' onSubmit={handleSubmit}>
        {/* <label className='label' htmlFor="walletId">Blockchain User Wallet ID:</label> */}
        <input
          className='inputField'
          type="text"
          id="walletId"
          value={walletId}
          onChange={handleWalletIdChange}
          placeholder="Enter your wallet ID"
        />
        <button className="submit" type="submit">Login</button>

        <div className="forgot-link">
          <a href="#">Forgot your wallet ID?</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;