import React from 'react';
import axios from 'axios';

import '../../../styles/RenderLandingPage.less';
import Minesweeper from '../../../styles/Images/MinesweeperClassic.png'
import HumanRights from '../../../styles/Images/HumanRights.jpg'
import bcrypt from '../../../styles/Images/bcrypt-logo.jpg'
import node from '../../../styles/Images/nodejs-header.jpg'
import jest from '../../../styles/Images/Jest.png'
import jwt from '../../../styles/Images/JWT.jpg'
import selfie from '../../../styles/Images/71322555388__22ED2073-00E3-4EDC-ABBC-148634AF6C6E.jpeg'

import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { about, education, experience, gitLink, header, latestProject, latestProjects, locationInfo, skills, skillsIntro } from '../../../data/homepage'

function RenderLandingPage(props) {
    const scrollToTop = () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
  
    const navigate = useNavigate();
  
    // Destructure useAuth in order to be able to use isAuthenticated call
    const { isAuthenticated } = useAuth0();
    const style = { backgroundColor: '#404C4A', color: '#FFFFFF' };
  
    return (
        <div className="main">
            <div className="lh header">
                <div className="header-text-container">
                    <h1>Emma's Portfolio Page</h1>
                    <h3>
                        This website showcases Emma's projects, whether they be personal, collab, or school related through BloomTech. Thanks for stopping by!
                    </h3>
                </div>
            </div>
            <div className='container'>
                <div className='column first-column'>
                    <div className='block'>
                        <h2>About Me</h2>
                        <p>{about}</p>
                    </div>
                </div>
                <div className='column second-column'>
                    <div className='block'>
                        <ul className='list-unstyled'>
                            <li>
                                <svg 
                                    className='svg-inline--fa fa-location-dot' aria-hidden="true" focusable="false" data-prefix="fas" 
                                    data-icon="location-dot" role="img" xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 384 512" data-fa-i2svg=""
                                >
                                        <path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 
                                            192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 
                                            15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                                        />
                                </svg>
                                    <span>
                                        {locationInfo.city}, {locationInfo.country}
                                    </span>
                            </li>
                            <li>
                                <svg 
                                    className="svg-inline--fa fa-envelope" aria-hidden="true" focusable="false" data-prefix="fas" 
                                    data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" 
                                    data-fa-i2svg=""
                                >
                                        <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 
                                            313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 
                                            176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" 
                                        />
                                </svg>
                                <span>
                                    <a href={`mailto:${locationInfo.email}`} >
                                        {locationInfo.email}
                                    </a>
                                </span>
                            </li>
                            <li>
                                <svg 
                                    class="svg-inline--fa fa-link" aria-hidden="true" focusable="false" data-prefix="fas" 
                                    data-icon="link" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" 
                                    data-fa-i2svg=""
                                >
                                    <path fill="currentColor" d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 
                                        10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 
                                        334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 
                                        7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 
                                        204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 
                                        19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 
                                        1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 
                                        244.3z"
                                    />
                                </svg>
                                <span>
                                    <a href={`${locationInfo.github}`}>
                                        {locationInfo.github}
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='column first-column'>
                    <div className='block'>
                        <h2>Latest Projects</h2>
                        <img src={`${latestProject.image}`} style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px'}} alt='Minesweeper Latest Project' />
                        <div style={{ textAlign: 'center' }}>
                            <h3>{latestProject.name}</h3>
                            <p>{latestProject.description}</p>
                            <a href={`${latestProject.gitLink}`}>
                                Go to the repo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p onClick={() => scrollToTop()} className="back-to-top">
                    Back To Top ^
                </p>
            </div>
        </div>
    );
}

export default RenderLandingPage;