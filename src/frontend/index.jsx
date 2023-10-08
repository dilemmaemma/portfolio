import React from 'react';
import ReactDom from 'react-dom';
import {
    BroswerRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import 'antd/dist/antd.less';
import { NotFoundPage } from './components/pages/NotFound';
import { LandingPage } from './components/pages/Landing';
import { About } from './components/pages/About';
import { Project } from './components/pages/Project';
import Dashboard from './components/pages/Auth0/Dashboard';
// import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { FooterContent, SubFooter } from './components/Layout/Footer';
import { HeaderContent } from './components/Layout/Header';

import { Layout } from 'antd';
import { colors } from './styles/data_vis_colors';

const { primary_accent_color } = colors;

ReactDom.render(
    <Router>
        {/* <Auth0Provider
            domain={`${process.env.REACT_APP_AUTH0_DOMAIN}`} // Auth0 domain
            clientId={`${process.env.REACT_APP_AUTH0_CLIENT_ID}`} // Auth0 client ID
            authorizationParams={{
                redirect_uri: window.location.origin, // Redirect URI after authentication
            }}
        >*/}
            <React.StrictMode>
                <App />
            </React.StrictMode>
        {/* </Auth0Provider> */}
    </Router>,
    document.getElementById('root')
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
                backgroundColor: primary_accent_color,
            }}
            >
                <HeaderContent />
            </Header>
            <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/about" componet={About} />
                    <Route path="/projects" component={Project} />
                    {/* {isAuthenticated && <Route path="/dashboard" component={Dashboard} />} */}
                    <Route component={NotFoundPage} />
            </Switch>
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