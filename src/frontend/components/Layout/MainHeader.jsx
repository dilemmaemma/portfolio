import React, { useState } from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/assets/Logos/TechImage.png';
import { colors } from '../../styles/data_vis_colors';
import { useAuth0 } from '@auth0/auth0-react';
import { REACT_APP_AUTH0_DOMAIN } from '../../data/environmental'

// const { primary_accent_color } = colors;
const { background_color, header_links } = colors;

function HeaderContent() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [isMouseOver, setIsMouseOver] = useState(false)

  function handleMouseOver() {
    setIsMouseOver(!isMouseOver)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: background_color,
      }}
    >
      <div className="dcc-logo" onClick={() => window.location.href = 'http://www.github.com/dilemmaemma'}>
        <Image width={75} src={Logo} preview={false} alt="Dilemma Cat Coding Logo" />
      </div>
      <div>
        <Link to="/" style={{ color: header_links, paddingRight: '75px' }}>
          Home
        </Link>
        <Link to="/projects" style={{ color: header_links, paddingRight: '75px' }}>
          Projects
        </Link>
        <Link to="/about" style={{ color: header_links, paddingRight: '75px' }}>
          About
        </Link>
        {!isAuthenticated && (
          <span
            style={{ color: header_links, display: 'inline-block', cursor: isMouseOver ? 'pointer' : 'default' }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOver}
            onClick={() =>
              loginWithRedirect({
                redirectUri: window.location.origin,
              })
            }
          >
            Log In
          </span>
        )}
        {isAuthenticated && (
          <span
            style={{ color: header_links, display: 'inline-block', cursor: isMouseOver ? 'pointer' : 'default' }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOver}
            onClick={() =>
              logout({
                logoutParams: {
                  returnTo: window.location.origin,
                },
              })
            }
          >
            Log Out
          </span>
        )}
        {isAuthenticated && (
          <Link
            to="/profile"
            style={{
              color: '#E2F0F7',
              paddingLeft: isAuthenticated ? '75px' : '0',
            }}
          >
            Profile
          </Link>
        )}
      </div>
    </div>
  );
}

export default HeaderContent;
