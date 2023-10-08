import { Space, Typography, Image } from 'antd';
import React, { useState } from 'react';
import Logo from '../../styles/assets/Logos/TechImage.png';
import { phoneNumber, email, linkStyle, linkStyleHover, linkEmailStyle, linkEmailStyleHover, linkPhoneStyle, linkPhoneStyleHover, city, state } from '../../data/info';

import '../../styles/RenderLandingPage.less';
const { Text } = Typography;

function FooterContent() {

  const [isHovered, setIsHovered] = useState(false)
  const [isEmailHovered, setIsEmailHovered] = useState(false)
  const [isPhoneHovered, setIsPhoneHovered] = useState(false)

  const handlePhoneEnter = () => {
    setIsPhoneHovered(true);
  };

  const handlePhoneLeave = () => {
    setIsPhoneHovered(false);
  }

  const handleEmailEnter = () => {
    setIsEmailHovered(true);
  };

  const handleEmailLeave = () => {
    setIsEmailHovered(false);
  }

  const handleEnter = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  }

  return (
    <div>
      {/*logo*/}
      <div>
        <Image width={75} src={Logo} preview={false} alt="HRF logo white" />
      </div>
      <Space className="footer-container" direction="horizontal">
        <Space direction="vertical" align="start">
          {/*contact info*/}
          <Text style={{ color: 'white' }}>
            Dilemma Cat Coding
            <br />
            Located in {city}, {state}
            <br />
            Add me on LinkedIn:
            &nbsp;
            {
              <a href = 'http://www.linkedin.com/in/emmahtml'
                style = {isHovered ? linkStyleHover : linkStyle}
                onMouseEnter = {handleEnter}
                onMouseLeave = {handleLeave}
              >
                emmahtml
              </a>
            }
          </Text>
          {/*media contact*/}
          <Text style={{ color: 'white' }}>
            For Job Opportunities call:
            <br/>
            <a 
              href = {`tel:${phoneNumber}`} 
              style = {isPhoneHovered ? linkPhoneStyleHover : linkPhoneStyle} 
              onMouseEnter = {handlePhoneEnter} 
              onMouseLeave = {handlePhoneLeave}
            >
              {phoneNumber}
            </a>
          </Text>
          <Text style={{ color: 'white' }}>
            For General Inquiries email:
            <br/>
            <a 
              href = {`mailto:${email}`} 
              style = {isEmailHovered ? linkEmailStyleHover : linkEmailStyle} 
              onMouseEnter = {handleEmailEnter} 
              onMouseLeave = {handleEmailLeave}
            >
              {email}
            </a>
          </Text>
        </Space>
      </Space>
    </div>
  );
}

export default FooterContent;
