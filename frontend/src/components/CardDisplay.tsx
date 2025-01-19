import React from 'react';
import ImgIcon from './ImgIcon.tsx';
import Fifth from './../assets/images/cards/5.png';
import CardTitle from './../assets/images/cards/card-title.png';

const CardDisplay = () => {
  return (
    <div className="card-display">
      <ImgIcon height={'500px'} width={'unset'} src={Fifth} />
      <div className="card-name">
        <ImgIcon height={'140px'} width={'unset'} src={CardTitle} />
        <span>The Dj</span>
      </div>
    </div>
  );
};
export default CardDisplay;
