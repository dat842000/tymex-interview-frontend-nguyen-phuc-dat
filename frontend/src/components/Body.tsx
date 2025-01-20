import React, { useState } from 'react';
import ImgIcon from './ImgIcon.tsx';
import Group from '../assets/images/group.svg';
import ListCard from './ListCard.tsx';
import FilterSection from './FilterSection.tsx';
import { ProductProvider } from '../context/PageContext.ts';
import { SearchOptions } from '../types/common.ts';

const Body = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchOptions, _setSearchOptions] = useState<SearchOptions>({
    maxResults: 10,
    filterTier: 'All',
    filterTheme: 'All',
    filterCate: 'All',
    sortTime: '',
    sortPrice: '',
    from: 0.01,
    to: 100,
    pageNumber: 1,
    textSearch: '',
  });

  const setSearchOptions = (v) => _setSearchOptions((o) => ({ ...o, ...v }));

  const fetchNextPage = () => {
    if (isFetching) return;
    setSearchOptions({
      pageNumber: searchOptions.pageNumber + 1,
    });
  };

  return (
    <div className="body">
      <ProductProvider
        value={{
          products,
          isFetching,
          isError,
          searchOptions,
          setIsError,
          setSearchOptions,
          setIsFetching,
          fetchNextPage,
          setProducts,
        }}
      >
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
