import React from "react";
import ImgIcon from "./ImgIcon";
import { IProduct } from "../types/product";
import { Tooltip } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { CARD_IMG, CATEGORIES_BACKGROUND } from "../utils/constant";
import Avatar from "./Avatar";

type SelfProps = {
  product: IProduct;
};

const Card = ({ product }: SelfProps) => {
  const CATEGORIES_KEY = Object.keys(CATEGORIES_BACKGROUND).find(
    (cateKey) => cateKey === product?.category.replace(/ /g, "_").toUpperCase()
  );

  return (
    <div className="card">
      <div
        className="card__img-container"
        role="test-bg"
        style={{
          background: CATEGORIES_KEY
            ? CATEGORIES_BACKGROUND[CATEGORIES_KEY]
            : CATEGORIES_BACKGROUND.DEFAULT,
        }}
      >
        <div className="card__img">
          <ImgIcon
            alt="product-img"
            height={"unset"}
            width={"180px"}
            src={CARD_IMG[product.imageId]}
          />
        </div>
        <div className="card__category-tag">{product.category}</div>
        <div className="card__favorite">
          {product.isFavorite ? (
            <HeartFilled title="filled" />
          ) : (
            <HeartOutlined title="outlined" />
          )}
        </div>
      </div>
      <div className="card__info">
        <div className="card__title">
          <Tooltip title={product.title}>
            <div className="card-name">{product.title}</div>
          </Tooltip>
          <div className="card-price">
            <ImgIcon alt="ethereum" size={14} src={"/icons/ethereum.svg"} />
            <Tooltip title={`${product.price} ETH`}>
              <span>{`${product.price} ETH`}</span>
            </Tooltip>
          </div>
        </div>
        <div className="card-author">
          <Avatar author={product.author} />
          <Tooltip
            title={`${product.author?.firstName || ""} ${product.author?.lastName || ""}`}
          >
            <span>{`${product.author?.firstName || ""} ${product.author?.lastName || ""}`}</span>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
export default Card;
