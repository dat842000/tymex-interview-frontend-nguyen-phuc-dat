import { ConfigProvider, Drawer, DrawerProps } from 'antd';
import React from 'react';

const AntdDrawer = ({ ...props }: DrawerProps) => {
  return (
    <ConfigProvider>
      <Drawer {...props} />
    </ConfigProvider>
  );
};
export default AntdDrawer;
