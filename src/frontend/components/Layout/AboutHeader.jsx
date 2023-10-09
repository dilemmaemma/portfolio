import React from 'react';
import axios from 'axios';
import { colors } from '../../styles/data_vis_colors'
import '../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function AboutHeader () {

    const { primary_accent_color } = colors

    return (
        <div className="main">
            <div className="ah header" style={{ color: primary_accent_color}}>
                <div className="header-text-container aboutInfo">
                    <h1>About Me</h1>
                    <nav>
                    <ul>
                        <li>
                            <a href='#contact'>Contact</a>
                        </li>
                        <li>
                            <a href='#terms'>Privacy Policy</a>
                        </li>
                    </ul>
                </nav>
                </div>
            </div>
        </div>
    );
};

export default AboutHeader;