import React from 'react';
import axios from 'axios';

import '../../../styles/RenderLandingPage.less';
import Minesweeper from '../../../styles/Images/MinesweeperClassic.png'

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
            <div className="lh header">
                <div className="header-text-container">
                    <h1>Emma's Portfolio Page</h1>
                    <h3>
                        This website showcases Emma's projects, whether they be personal, collab, or school related through BloomTech. Thanks for stopping by!
                    </h3>
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