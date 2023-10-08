import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/styles.css'
import CodingCat from '../../../styles/Images/CodingKitty_Background.png'

const NotFoundPage = () => {
  return (
    <div className='image-container' id='error'>
        <img src={CodingCat} alt='Error Page' className='full-screen-image'></img>
        <div className='overlay-text'>
          <h1>404 Page Not Found</h1>
          <Link to="/">
              <button className='btn'>Back To Home</button>
          </Link>
        </div>
    </div>
  );
};

export default NotFoundPage;
