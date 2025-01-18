import React from 'react';
import ImgIcon from './ImgIcon.tsx';
import Ethereum from './../assets/icons/ethereum.svg';

const Card = ({ background }) => {
  return (
    <div className="card">
      <div className="card__img-container" style={{ background }}></div>
      <div className="card__info">
        <div className="card__title">
          <div className="card-name">The DJ</div>
          <div className="card-price">
            <ImgIcon size={17} src={Ethereum} />
            <span>2,75 ETH</span>
          </div>
        </div>
        <div className="card-author">
          <ImgIcon src="https://robohash.org/quoindolore.png?size=100x100&set=set1" />
          <span>Ghozali_Ghozalu</span>
        </div>
      </div>
    </div>
  );
};
export default Card;
