import React from 'react';
import ImgIcon from './ImgIcon.tsx';
import One from './../assets/images/tags/1.png';
import Second from './../assets/images/tags/2.png';
import Third from './../assets/images/tags/3.png';
import Fourth from './../assets/images/tags/4.png';

const HeaderTag = () => {
  return (
    <div className="header-tag">
      <div className="tag-1">
        <ImgIcon src={One} width={'350px'} height={'unset'} />
      </div>
      <div className="tag-4">
        <ImgIcon src={Fourth} width={'480px'} height={'unset'} />
      </div>
      <div className="tag-2">
        <ImgIcon src={Second} width={'480px'} height={'unset'} />
      </div>
      <div className="tag-3">
        <ImgIcon src={Third} width={'100px'} height={'unset'} />
      </div>
    </div>
  );
};
export default HeaderTag;
