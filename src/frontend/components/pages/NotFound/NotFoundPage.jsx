import React from 'react';
import { Link } from 'react-router-dom';
import CodingCat from '../../../styles/Images/CodingKitty.png'

const NotFoundPage = () => {
  return (
    <div>
        <img src={CodingCat} alt='Error Page'></img>
        <h1>404 Page Not Found</h1>
        <Link to="/">
            <button>Back To Home</button>
        </Link>
    </div>
  );
};

export default NotFoundPage;
