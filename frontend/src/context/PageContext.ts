import { createContext } from 'react';
import { IProduct } from '../types/product';
import { SearchOptions } from '../types/common';

type IProductMetaData = {
  products: IProduct[];
  isError: boolean;
  isFetching: boolean;
  searchOptions: SearchOptions;
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  setSearchOptions: (o) => void;
  setIsFetching: React.Dispatch<React.SetStateAction<boolean>>;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  fetchNextPage: () => void;
};

const ProductContext = createContext<IProductMetaData>({
  products: [],
  isError: false,
  isFetching: false,
  searchOptions: {
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
  },
  setProducts: () => {},
  setSearchOptions: () => {},
  setIsError: () => {},
  setIsFetching: () => {},
  fetchNextPage: () => {},
});

export const ProductProvider = ProductContext.Provider;

export default ProductContext;
