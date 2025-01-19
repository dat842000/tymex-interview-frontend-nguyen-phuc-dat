import { ConfigProvider, Input, InputProps } from 'antd';
import React from 'react';

const AntdInput = ({ ...props }: InputProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBorder: '#3A3841',
            colorText: 'white',
            colorTextBase: 'white',
            colorTextLabel: 'white',
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
      <Input {...props} />
    </ConfigProvider>
  );
};

export default AntdInput;
