import React from 'react';
import ImgIcon from './ImgIcon.tsx';
import Group from '../assets/images/group.svg';

const Body = () => {
  return (
    <div className="body">
      <ImgIcon
        width="100%"
        height="unset"
        src={Group}
        className="body-background"
      />
    </div>
  );
};
export default Body;
