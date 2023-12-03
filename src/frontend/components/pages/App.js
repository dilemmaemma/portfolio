import React from 'react';
import {
    Routes,
    Route,
} from 'react-router-dom';

import NotFoundPage from './NotFound/NotFoundPage';
import LandingPage from './Landing/RenderLandingPage';
import About from './About/About.jsx';
import Project from './Project/Project';
import Support from './Support/Support';
import FooterContent from '../Layout/FooterContent';
import SubFooter from '../Layout/SubFooter.jsx';
import HeaderContent from '../Layout/MainHeader.jsx';

import { useAuth0 } from '@auth0/auth0-react';

import { Layout } from 'antd';
import 'antd/dist/antd.less';

import { colors } from '../../styles/data_vis_colors';
const { primary_accent_color, background_color } = colors;

export function App() {
    const { Footer, Header } = Layout;
    const { isAuthenticated } = useAuth0();

    return (
        <Layout>
            <Header
            style={{
                height: '10vh',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: background_color,
            }}
            >
                <HeaderContent />
            </Header>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Project />} />
                <Route path='/support' element={<Support />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <Footer
                style={{
                    backgroundColor: primary_accent_color,
                    color: '#E2F0F7',
                }}
            >
                <FooterContent />
            </Footer>
            <Footer
                style={{
                    backgroundColor: primary_accent_color,
                    padding: 0,
                }}
            >
                <SubFooter />
            </Footer>
        </Layout>
    );
}

export default App;