import React from 'react';
import { Analytics } from '@vercel/analytics/react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.less';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './components/pages/App';

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
                <Analytics />
            </React.StrictMode>
        </Auth0Provider>
    </Router>,
);

