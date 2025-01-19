import { createContext } from 'react';
import { IProduct } from '../types/product';

type IProductMetaData = {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
};

const ProductContext = createContext<IProductMetaData>({
  products: [],
  setProducts: () => {},
});

export const ProductProvider = ProductContext.Provider;
export const ProductConsumer = ProductContext.Consumer;

export default ProductContext;
