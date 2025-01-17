import React, { useState } from 'react';
import { NAV_BAR_ITEMS } from '../utils/constant.ts';
import { NavItem } from '../types/navItem.ts';
import AntdButton from './AntdButton.tsx';
import { Button, Divider, Dropdown, MenuProps, Space, theme } from 'antd';
import GlobalIcon from '../assets/icons/world.svg';
import ChevronDown from '../assets/icons/chevron-down.svg';
import ImgIcon from './ImgIcon.tsx';

const { useToken } = theme;

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
];

const Navigation = () => {
  const { token } = useToken();
  const [selectedNavItem, setSelectedNavItem] = useState<NavItem>(
    NAV_BAR_ITEMS[4],
  );

  const contentStyle: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const menuStyle: React.CSSProperties = {
    boxShadow: 'none',
  };

  const isActiveNavItem = (label) => selectedNavItem.label === label;

  const handleClickNavItem = (navItem: NavItem) => {
    setSelectedNavItem(navItem);
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar__container-left">
        {NAV_BAR_ITEMS.map((item) => (
          <span
            key={item.label}
            className={`nav-bar__container-left__item-label ${isActiveNavItem(item.label) ? 'isActive' : ''}`}
            onClick={() => handleClickNavItem(item)}
          >
            {item.label}
          </span>
        ))}
      </div>
      <div className="nav-bar__container-right">
        <AntdButton text="Connect Wallet" />
        <Dropdown
          menu={{ items }}
          dropdownRender={(menu) => (
            <div style={contentStyle}>
              {React.cloneElement(
                menu as React.ReactElement<{
                  style: React.CSSProperties;
                }>,
                { style: menuStyle },
              )}
              <Divider style={{ margin: 0 }} />
              <Space style={{ padding: 8 }}>
                <Button type="primary">Click me!</Button>
              </Space>
            </div>
          )}
        >
          <Space>
            <ImgIcon src={GlobalIcon} />
            <ImgIcon src={ChevronDown} />
          </Space>
        </Dropdown>
      </div>
    </div>
  );
};
export default Navigation;
