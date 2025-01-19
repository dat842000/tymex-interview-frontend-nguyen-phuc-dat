import { IProduct } from '../types/product.ts';
import { axiosInstance } from './index.ts';

const getProducts = async (
  page: number = 0,
  maxResults: number = 10,
  from: number,
  to: number,
  searchValue?: string,
  filterTheme?: string,
  filterTier?: string,
  filterCate?: string,
  sortPrice?: string,
  sortTime?: string,
): Promise<{
  products: IProduct[];
}> => {
  let url = `/products?_page=${page}&limit=${maxResults}`;
  if (searchValue && searchValue?.trim()) url += `&title_like=${searchValue}`;
  url += `&price_gte=${from}&price_lte=${to}`;
  if (filterTheme && filterTheme !== 'All') url += `&theme=${filterTheme}`;
  if (filterTier && filterTier !== 'All') url += `&tier=${filterTier}`;
  if (filterCate && filterCate !== 'All') url += `&category_like=${filterCate}`;
  if (sortPrice && sortPrice?.trim()) url += `&_sort=price&_order=${sortPrice}`;
  if (sortTime && sortTime?.trim())
    url += `&_sort=createdAt&_order=${sortTime}`;

  const res = await axiosInstance.get(url);
  return { products: res.data };
};

const ProductAPI = {
  getProducts,
};

export default ProductAPI;
