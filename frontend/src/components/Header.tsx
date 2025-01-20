import React from 'react';
import Navigation from './Navigation.tsx';
import ImgIcon from './ImgIcon.tsx';
import CharactersBanner from '../assets/images/characters-banner.svg';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-footer">
          <ImgIcon
            className=""
            src={CharactersBanner}
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
