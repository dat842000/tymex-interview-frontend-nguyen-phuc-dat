import React from 'react';
import Navigation from './Navigation.tsx';

const Header = () => {
  return (
    <div className="header">
      <div className="header__layer">
        <Navigation></Navigation>
      </div>
    </div>
  );
};
export default Header;
