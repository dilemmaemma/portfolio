import React from 'react';
import axios from 'axios';
import { colors } from '../../styles/data_vis_colors'
import '../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function ProjectsHeader () {

    const { primary_accent_color } = colors

    return (
        <div className="main">
            <div className="ph header" style={{ color: primary_accent_color}}>
                <div className="header-text-container">
                    <h1>Emma's Projects</h1>
                    <h3>
                        Below you will find a list of my projects, including those that are personal, collabs, and done through BloomTech
                    </h3>
                    <h3>
                        If you would like to download code directly from the site or demo the code, please create an account first. Otherwise, you can go through GitHub to view the code.
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default ProjectsHeader;