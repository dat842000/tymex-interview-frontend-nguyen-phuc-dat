import React from 'react';
import ImgIcon from './ImgIcon.tsx';
import Ethereum from './../assets/icons/ethereum.svg';
import { IProduct } from '../types/product.ts';

type SelfProps = {
  background: string;
  product: IProduct;
};

const Card = ({ product, background }: SelfProps) => {
  return (
    <div className="card">
      <div className="card__img-container" style={{ background }}></div>
      <div className="card__info">
        <div className="card__title">
          <div className="card-name">{product.title}</div>
          <div className="card-price">
            <ImgIcon size={17} src={Ethereum} />
            <span>{`${product.price} ETH`}</span>
          </div>
        </div>
        <div className="card-author">
          <ImgIcon src={product.author?.avatar} />
          <span>{`${product.author?.firstName || ''} ${product.author?.lastName || ''}`}</span>
        </div>
      </div>
    </div>
  );
};
export default Card;
