import { ConfigProvider, Input, Select } from 'antd';
import React from 'react';

const AntdInput = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBorder: '#3A3841',
            colorTextBase: 'white',
            colorTextLabel: 'black',
            controlHeight: 40,
          },
        },
        token: {
          colorTextPlaceholder: 'white',
          colorBgContainer: 'transparent',
          borderRadius: 4,
        },
      }}
    >
      <Input placeholder="Select a person" />
    </ConfigProvider>
  );
};

export default AntdInput;
