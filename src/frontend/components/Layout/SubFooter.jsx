import { Button, Space, Layout } from 'antd';
import React from 'react';
import { colors } from '../../styles/data_vis_colors';
import { REACT_APP_PUBLIC_URL } from '../../data/environmental';

import '../../styles/RenderLandingPage.less';
const { primary_accent_color } = colors;

function SubFooter() {
    const { Footer } = Layout;
    const base_url = REACT_APP_PUBLIC_URL;
    const button_links_by_text = {
      'About Me': `${base_url}/about`,
      'Contact': `${base_url}/about#contact`,
      'Terms & Privacy': `${base_url}/about#terms`,
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