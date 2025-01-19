import React from 'react';
import ImgIcon from './ImgIcon.tsx';
import Background from './../assets/images/card-header-background.png';

const CardHeader = ({ character }: { character: any }) => {
  return (
    <div className="card-header">
      <div className="card-image__background-shadow"></div>
      <div className="card-image">
        <div className="card-image__background">
          <ImgIcon width={'170px'} height={'unset'} src={Background} />
        </div>
        <div className="card-image__character">
          <ImgIcon width={'170px'} height={'unset'} src={character} />
        </div>
      </div>
      <div className="card-name"></div>
    </div>
  );
};
export default CardHeader;
