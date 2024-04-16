import React, { useState, useEffect, useCallback } from 'react';
import "./style.css";
import image1 from "../images/avatar.jpg";
import image2 from "../images/deadpool.jpg";
import image3 from "../images/panda.jpg";
import image4 from "../images/FF6.jpg";
import image5 from "../images/across.jpg";
import image6 from "../images/black-spider.jpg"
import image7 from "../images/spiderverse.jpeg"
import image8 from "../images/sparrow.jpg"
import image9 from "../images/joker.jpg"

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
]; // Add the URLs of your images here

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getNextImageIndex = useCallback(() => {
    // Calculate the index of the next image
    return (currentImageIndex + 1) % images.length;
  }, [currentImageIndex]);

  const getNextImage = useCallback(() => {
    // Get the URL of the next image
    return images[getNextImageIndex()];
  }, [getNextImageIndex]);

  const changeBackgroundImage = useCallback(() => {
    // Change the background image to the next image
    setCurrentImageIndex(getNextImageIndex());
  }, [getNextImageIndex]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform any necessary operations with the user's name and email
    console.log('Name:', name);
    console.log('Email:', email);
  };

  useEffect(() => {
    // Call changeBackgroundImage every 5 seconds
    const interval = setInterval(changeBackgroundImage, 10000);
    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [changeBackgroundImage]);

  return (
    <div className='registrationPage' style={{ backgroundImage: `url(${getNextImage()})` }}>
      <div className="overlay">
        <div className="registerContainer">
          <h2 className='header'>Register</h2>
          <hr className='line' />
          <form className='registerForm' onSubmit={handleSubmit}>
            <input className='inputField' type="text" placeholder='Name' value={name} onChange={handleNameChange} />
            <input className='inputField' type="email" placeholder='Email' value={email} onChange={handleEmailChange} />
            <input className='inputField' type="text" placeholder='nanika' />
            <button type='submit' className='submit-button'> Register </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
