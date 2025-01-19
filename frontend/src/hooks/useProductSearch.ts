import { useContext, useEffect, useRef, useState } from 'react';
import { debounce, uniqBy } from 'lodash';
import { IProduct } from '../types/product.ts';
import ProductAPI from '../api/product.ts';
import { v4 } from 'uuid';
import ProductContext from '../context/PageContext.ts';

interface Result {
  products: IProduct[];
}

interface SearchOptions {
  filterTheme: string;
  filterCate: string;
  filterTier: string;
  sortPrice: string;
  sortTime: string;
  textSearch: string;
  pageNumber: number;
  from: number;
  to: number;
  maxResults: number;
}

const fetchData = debounce(
  (
    searchOption: SearchOptions,
    id: string,
    callback: (result: Result, id: string) => void,
  ) => {
    const {
      pageNumber,
      maxResults,
      from,
      to,
      textSearch,
      filterTheme,
      filterTier,
      filterCate,
      sortTime,
      sortPrice,
    } = searchOption;

    ProductAPI.getProducts(
      pageNumber,
      maxResults,
      from,
      to,
      textSearch,
      filterTheme,
      filterTier,
      filterCate,
      sortTime,
      sortPrice,
    ).then((data) => {
      callback(data, id);
    });
  },
  1000,
);

const useProductSearch = () => {
  const { products, setProducts } = useContext(ProductContext);
  const [isFetching, setIsFetching] = useState(false);
  const [searchOptions, _setSearchOptions] = useState<SearchOptions>({
    maxResults: 10,
    filterTier: 'All',
    filterTheme: 'All',
    filterCate: 'All',
    sortTime: '',
    sortPrice: '',
    from: 0,
    to: 100,
    pageNumber: 1,
    textSearch: '',
  });

  const setSearchOptions = (v) => _setSearchOptions((o) => ({ ...o, ...v }));
  const lastApiRef = useRef<string>(null);

  useEffect(() => {
    const newId = v4();
    lastApiRef.current = newId;
    setIsFetching(true);
    fetchData(searchOptions, newId, (results: Result, id: string) => {
      if (lastApiRef.current !== id) return; // old API
      setIsFetching(false);
      if (searchOptions.pageNumber === 1) {
        setProducts(results.products);
        return;
      }
      setProducts(uniqBy([...products, ...results.products], 'id'));
    });
  }, [searchOptions]);

  const fetchNextPage = () => {
    if (isFetching) return;
    _setSearchOptions((old) => ({
      ...old,
      pageNumber: searchOptions.pageNumber + 1,
    }));
  };

  return {
    isFetching,
    searchOptions,
    setSearchOptions,
    fetchNextPage,
  };
};

export default useProductSearch;
