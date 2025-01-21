import { useContext, useEffect, useRef } from "react";
import { debounce, uniqBy } from "lodash";
import { IProduct } from "../types/product";
import ProductAPI from "../api/product";
import { v4 } from "uuid";
import ProductContext from "../context/PageContext";
import { SearchOptions } from "../types/common";

interface Result {
  products: IProduct[];
}

const fetchData = debounce(
  (
    searchOption: SearchOptions,
    id: string,
    callback: (result: Result, id: string) => void,
    callbackErr: () => void
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
      sortPrice
    )
      .then((data) => {
        callback(data, id);
      })
      .catch(() => {
        callbackErr();
      });
  },
  1000
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
    const fetchProducts = () => {
      try {
        setIsFetching(true);
        setIsError(false);
        const newId = v4();
        lastApiRef.current = newId;

        const handleSuccess = (results: Result, id: string) => {
          if (lastApiRef.current !== id) return; // Ignore outdated responses
          setIsFetching(false);

          setProducts((prevProducts) =>
            searchOptions.pageNumber === 1
              ? results.products
              : uniqBy([...prevProducts, ...results.products], "id")
          );
        };
        const handleError = () => {
          setIsError(true);
          setIsFetching(false);
        };

        fetchData(searchOptions, newId, handleSuccess, handleError);
      } catch (e) {
        setIsError(true);
        setIsFetching(false);
      }
    };

    // fetch the first time
    fetchProducts();
    // Set up interval fetching every 60s
    const intervalId = setInterval(fetchProducts, 60000);

    // clean up when change dependency
    return () => clearInterval(intervalId);
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
