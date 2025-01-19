import React from 'react';
import Navigation from './Navigation.tsx';
import ImgIcon from './ImgIcon.tsx';
import HeaderBackground from '../assets/images/header-footer.png';
import One from './../assets/images/cards/1.png';
import Second from './../assets/images/cards/2.png';
import Third from './../assets/images/cards/3.png';
import Four from './../assets/images/cards/4.png';
import CardHeader from './CardHeader.tsx';
import CardDisplay from './CardDisplay.tsx';
import HeaderTag from './HeaderTag.tsx';

const HEADER_CARDS = [One, Second, Third, Four];

const Header = () => {
  return (
    <div className="header">
      <div className="header__layer">
        <Navigation></Navigation>
        <HeaderTag />
        <div className="header-footer">
          <ImgIcon
            className=""
            src={HeaderBackground}
            width={'100%'}
            height={'unset'}
          />
          <div className="header__card-list">
            {HEADER_CARDS.map((item) => (
              <CardHeader key={item} character={item} />
            ))}
          </div>
          <CardDisplay />
        </div>
      </div>
    </div>
  );
};
export default Header;
