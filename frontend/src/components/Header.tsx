import React from 'react';
import Navigation from './Navigation';
import ImgIcon from './ImgIcon';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-footer">
          <ImgIcon
            alt="characters-banner"
            src={'./images/characters-banner.svg'}
            width={'100%'}
            height={'unset'}
          />
        </div>
      </div>
      <Navigation />
    </>
  );
};
export default Header;
