import React, { useCallback, useState } from 'react';
import './style.css';
import image1 from "../images/avatar.jpg";
import image2 from "../images/deadpool.jpg";
import image3 from "../images/panda.jpg";
import image4 from "../images/FF6.jpg";
import image5 from "../images/across.jpg";
import image6 from "../images/black-spider.jpg"
import image7 from "../images/spiderverse.jpeg"
import image8 from "../images/sparrow.jpg"
import image9 from "../images/joker.jpg"
import { useEffect } from 'react';

const images = [
  image1, 
  image2, 
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
]; 

const LoginPage = () => {
  const [walletId, setWalletId] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const getNextImageIndex = useCallback(() => {
    return (currentImage + 1) % images.length;
  }, [currentImage]);

  const getNextImage = useCallback(() =>{
    return images[getNextImageIndex()];
  }, [getNextImageIndex]);

  const changeBackgroundImage = useCallback(() =>{
    return setCurrentImage(getNextImageIndex());
  }, [getNextImageIndex]);
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

  useEffect(() => {
    const interval = setInterval(changeBackgroundImage, 10000);

    return () => {
      clearInterval(interval)
    }
  }, [changeBackgroundImage]);

  return (
    <div className='loginPage' style={{backgroundImage: `url(${getNextImage()})`}}>
      <div className="overlay">
        <div className="container">
          <h2 className='header'>Login</h2>
          <hr className="line" />
          <p>
            You will have to connect your blockchain wallet to access this site.
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
    </div>
  );
};

export default LoginPage;