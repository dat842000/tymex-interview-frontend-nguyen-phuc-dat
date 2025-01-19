import React, { useState } from 'react';
import ImgIcon from './ImgIcon.tsx';
import Group from '../assets/images/group.svg';
import ListCard from './ListCard.tsx';
import FilterSection from './FilterSection.tsx';
import { ProductProvider } from '../context/PageContext.ts';

const Body = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  return (
    <div className="body">
      <ProductProvider value={{ products, setProducts }}>
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
      </ProductProvider>
    </div>
  );
};
export default Body;
