import React, { useState } from 'react';
import { NAV_BAR_ITEMS } from '../utils/constant.ts';
import { NavItem } from '../types/common.ts';
import AntdButton from './AntdButton.tsx';
import { Dropdown, MenuProps, theme } from 'antd';
import GlobalIcon from '../assets/icons/world.svg';
import ChevronDown from '../assets/icons/chevron-down.svg';
import ImgIcon from './ImgIcon.tsx';
import { MenuOutlined } from '@ant-design/icons';
import AntdDrawer from './AntdDrawer.tsx';

const { useToken } = theme;

const items: MenuProps['items'] = [
  {
    key: '1',
    label: <span>VN</span>,
  },
  {
    key: '2',
    label: <span>EN</span>,
  },
];

const Navigation = () => {
  const { token } = useToken();
  const [selectedNavItem, setSelectedNavItem] = useState<NavItem>(
    NAV_BAR_ITEMS[4],
  );
  const [openDrawer, setOpenDrawer] = useState(false);

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
        <AntdButton
          onClick={() => setOpenDrawer(true)}
          icon={<MenuOutlined />}
          className="nav-btn"
          text=""
        />
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
        <AntdButton className="connect-btn" text="Connect Wallet" />
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
            </div>
          )}
        >
          <div className="language-btn">
            <ImgIcon width={24} height={24} src={GlobalIcon} />
            <ImgIcon width={24} height={24} src={ChevronDown} />
          </div>
        </Dropdown>
      </div>
      <AntdDrawer
        placement={'left'}
        closable={false}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      >
        <div className="drawer-container">
          {NAV_BAR_ITEMS.map((item) => (
            <span
              key={item.label}
              className={`drawer-item ${isActiveNavItem(item.label) ? 'isActive' : ''}`}
              onClick={() => handleClickNavItem(item)}
            >
              {item.label}
            </span>
          ))}
          <AntdButton className="connect-btn" text="Connect Wallet" />
        </div>
      </AntdDrawer>
    </div>
  );
};
export default Navigation;
