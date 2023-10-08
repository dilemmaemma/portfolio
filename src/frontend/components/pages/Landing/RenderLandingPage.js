import LoginButton from '../Auth0/Login_Button';
import LogoutButton from '../Auth0/Logout_Button';
import React from 'react';
import axios from 'axios';

import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

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
            <div className="header">
            <div className="header-text-container">
                <h1>Emma's Portfolio Page</h1>
                <h3>
                    This website showcases Emma's projects, whether they be personal, collab, or school related through BloomTech. Thanks for stopping by!
                </h3>
                <h3>
                    If you would like to download code directly from the site or demo the code, please create an account first. Otherwise, you can go through GitHub to view the code.
                </h3>
                <LoginButton />
                {
                    isAuthenticated && <LogoutButton />
                }
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