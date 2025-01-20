import { Tabs, TabsProps } from 'antd';
import React from 'react';
import './../styles/customTab.scss';

const AntdTabs = ({ ...props }: TabsProps) => {
  return <Tabs className="custom-tab" {...props} />;
};

export default AntdTabs;
