import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import 'antd/dist/antd.less';
import NotFoundPage from './components/pages/NotFound/NotFoundPage';
import LandingPage from './components/pages/Landing/RenderLandingPage';
import About from './components/pages/About/About.jsx';
import Project from './components/pages/Project/Project';
import Dashboard from './components/pages/Auth0/Dashboard';
import Support from './components/pages/Support/Support';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import FooterContent from './components/Layout/FooterContent';
import SubFooter from './components/Layout/SubFooter.jsx';
import HeaderContent from './components/Layout/MainHeader.jsx';

import { Layout } from 'antd';
import { colors } from './styles/data_vis_colors';

const { primary_accent_color, background_color } = colors;

const root = createRoot(document.getElementById('root'));

root.render(
    <Router>
        <Auth0Provider
            domain={`dev-4fvmmq4mwx6cnf68.us.auth0.com`} // Auth0 domain
            clientId={`MqLaOYbuRIqIlw4wVtBJHX3CzUIUpBlN`} // Auth0 client ID
            authorizationParams={{
                redirect_uri: window.location.origin, // Redirect URI after authentication
            }}
        >
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Auth0Provider>
    </Router>,
);

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
                {isAuthenticated && <Route path="/dashboard" element={<Dashboard />} />}
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