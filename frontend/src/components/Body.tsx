import React from 'react';
import ImgIcon from './ImgIcon.tsx';
import Group from '../assets/images/group.svg';
import ListCard from './ListCard.tsx';
import FilterSection from './FilterSection.tsx';

const Body = () => {
  return (
    <div className="body">
      <div className="body-content">
        <FilterSection />
        <ListCard />
      </div>
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
