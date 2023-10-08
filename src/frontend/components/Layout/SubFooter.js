import { Button, Space, Layout } from 'antd';
import React from 'react';
import { colors } from '../../styles/data_vis_colors';

import '../../styles/RenderLandingPage.less';
const { primary_accent_color } = colors;

function SubFooter() {
    const { Footer } = Layout;
    const base_url = 'https://www.humanrightsfirst.org';
    const button_links_by_text = {
      'About Us': `${base_url}/about`,
      'Contact Us': `${base_url}/about/contact`,
      Press: `${base_url}/press`,
      'Terms & Privacy': `${base_url}/about/privacy-policy`,
      'Sign Up': `${base_url}/sign-up`,
      Careers: `${base_url}/careers`,
    };
    return (
      <Footer
        style={{
          backgroundColor: primary_accent_color,
          marginLeft: '-7px',
        }}
      >
        <Space direction="horizontal">
          {Object.entries(button_links_by_text).map((text_link_pair, index) => {
            return (
              <Button
                key={index}
                type="text"
                size="small"
                href={text_link_pair[1]}
                style={{ color: 'white' }}
              >
                {text_link_pair[0]}
              </Button>
            );
          })}
        </Space>
      </Footer>
    );
};

export default SubFooter;