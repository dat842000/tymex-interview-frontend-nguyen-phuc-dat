import { Button, ConfigProvider } from 'antd';
import React from 'react';

type SelfProps = {
  text: string;
};

const AntdButton = ({ text }: SelfProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#DA458F',
        borderRadius: 4,
      },
    }}
  >
    <Button type="primary">{text}</Button>
  </ConfigProvider>
);
export default AntdButton;
