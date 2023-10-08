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
                <h1>Asylum Office Grant Rate Tracker</h1>
                <h3>
                The Asylum Office Grant Rate Tracker provides asylum seekers,
                researchers, policymakers, and the public an interactive tool to
                explore USCIS data on Asylum Office decisions
                </h3>
                <LoginButton />
                <LogoutButton />
            </div>
            </div>
        </div>
    );
}

export default RenderLandingPage;