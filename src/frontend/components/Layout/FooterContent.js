import { Space, Typography, Image } from 'antd';
import React from 'react';
import Logo from '../../styles/Images/TechImage.png';

import '../../styles/RenderLandingPage.less';
const { Text } = Typography;

function FooterContent() {
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
            Human Rights First
            <br />
            75 Broad St, 31st Floor, New York,
            <br />
            New York, New York 10004 US
          </Text>
          {/*media contact*/}
          <Text style={{ color: 'white' }}>
            For Media Inquiries call 202-370-3323
          </Text>
        </Space>
      </Space>
    </div>
  );
}

export default FooterContent;
