import React from 'react';
import ImgIcon from './ImgIcon.tsx';
import Ethereum from './../assets/icons/ethereum.svg';
import { IProduct } from '../types/product.ts';
import { Tooltip } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { CARD_IMG, CATEGORIES_BACKGROUND } from '../utils/constant.ts';

type SelfProps = {
  product: IProduct;
};

const Card = ({ product }: SelfProps) => {
  const CATEGORIES_KEY = Object.keys(CATEGORIES_BACKGROUND).find(
    (cateKey) => cateKey === product?.category.replace(/ /g, '_').toUpperCase(),
  );

  return (
    <div className="card">
      <div
        className="card__img-container"
        style={{
          background: CATEGORIES_KEY
            ? CATEGORIES_BACKGROUND[CATEGORIES_KEY]
            : CATEGORIES_BACKGROUND.DEFAULT,
        }}
      >
        <div className="card__img">
          <ImgIcon
            height={'unset'}
            width={'180px'}
            src={CARD_IMG[product.imageId]}
          />
        </div>
        <div className="card__category-tag">{product.category}</div>
        <div className="card__favorite">
          {product.isFavorite ? <HeartFilled /> : <HeartOutlined />}
        </div>
      </div>
      <div className="card__info">
        <div className="card__title">
          <Tooltip title={product.title}>
            <div className="card-name">{product.title}</div>
          </Tooltip>
          <div className="card-price">
            <ImgIcon size={14} src={Ethereum} />
            <Tooltip title={`${product.price} ETH`}>
              <span>{`${product.price} ETH`}</span>
            </Tooltip>
          </div>
        </div>
        <div className="card-author">
          <ImgIcon src={product.author?.avatar} />
          <Tooltip
            title={`${product.author?.firstName || ''} ${product.author?.lastName || ''}`}
          >
            <span>{`${product.author?.firstName || ''} ${product.author?.lastName || ''}`}</span>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
export default Card;
