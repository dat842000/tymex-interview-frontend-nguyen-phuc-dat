import React, { useContext, useState } from 'react';
import AntdButton from './AntdButton.tsx';
import { CATEGORIES } from '../utils/constant.ts';
import Card from './Card.tsx';
import useProductSearch from '../hooks/useProductSearch.ts';
import ProductContext from '../context/PageContext.ts';

const EXPORT_IMG_BACKGROUND = [
  'linear-gradient(90deg, #fe5a5a, #f163d2)',
  'linear-gradient(90deg, #DD5AFE, #6366F1)',
  'linear-gradient(90deg, #49DD81, #22B4C6)',
  'linear-gradient(90deg, #43A6F6, #5868F3)',
  'linear-gradient(90deg, #FE955A, #F1DA63)',
];
const CATEGORY_OPTION = [
  { value: 'All', label: 'All' },
  { value: 'Upper body', label: 'Upper Body' },
  { value: 'Lower body', label: 'Lower Body' },
  { value: 'Hat', label: 'Hat' },
  { value: 'Shoes', label: 'Shoes' },
  { value: 'Accessory', label: 'Accessory' },
  { value: 'Legendary', label: 'Legendary' },
  { value: 'Mythic', label: 'Mythic' },
  { value: 'Epic', label: 'Epic' },
  { value: 'Rare', label: 'Rare' },
];

const ListCard = () => {
  const [selectedCate, setSelectedCate] = useState(CATEGORIES[0]);
  const { fetchNextPage, setSearchOptions } = useProductSearch();
  const { products } = useContext(ProductContext);

  const loadMore = () => {
    fetchNextPage();
  };

  const handleClickCate = (item: string) => {
    setSearchOptions({ filterCate: item });
    setSelectedCate(item);
  };
  return (
    <div className="list-card">
      <div className="list-card__category">
        {CATEGORY_OPTION.map((item) => (
          <AntdButton
            isSelected={selectedCate === item.value}
            onClick={() => handleClickCate(item.value)}
            key={item.value}
            text={item.label}
          />
        ))}
      </div>
      <div className="list-card__content">
        <div className="list-card__container">
          {products.map((item) => (
            <Card
              key={item.id}
              product={item}
              background={EXPORT_IMG_BACKGROUND[Math.floor(Math.random() * 5)]}
            />
          ))}
        </div>
      </div>
      <div className="list-card__footer">
        <AntdButton onClick={loadMore} text="View more" />
      </div>
    </div>
  );
};
export default ListCard;
