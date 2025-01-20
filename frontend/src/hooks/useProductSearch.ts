import { useContext, useEffect, useRef } from 'react';
import { debounce, uniqBy } from 'lodash';
import { IProduct } from '../types/product.ts';
import ProductAPI from '../api/product.ts';
import { v4 } from 'uuid';
import ProductContext from '../context/PageContext.ts';
import { SearchOptions } from '../types/common.ts';

interface Result {
  products: IProduct[];
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
  const {
    searchOptions,
    products,
    isFetching,
    isError,
    setSearchOptions,
    setProducts,
    setIsFetching,
    setIsError,
  } = useContext(ProductContext);

  const lastApiRef = useRef<string>(null);

  useEffect(() => {
    try {
      setIsFetching(true);
      setIsError(false);
      const newId = v4();
      lastApiRef.current = newId;
      fetchData(searchOptions, newId, (results: Result, id: string) => {
        if (lastApiRef.current !== id) return; // old API
        setIsFetching(false);
        if (searchOptions.pageNumber === 1) {
          setProducts(results.products);
          return;
        }
        setProducts(uniqBy([...products, ...results.products], 'id'));
      });
    } catch (e) {
      setIsError(true);
      setIsFetching(false);
    }
  }, [searchOptions]);

  const fetchNextPage = () => {
    if (isFetching) return;
    setSearchOptions({
      pageNumber: searchOptions.pageNumber + 1,
    });
  };

  return {
    products,
    isFetching,
    isError,
    searchOptions,
    setProducts,
    setSearchOptions,
    fetchNextPage,
  };
};

export default useProductSearch;
