import React, { useState } from 'react';
import AntdButton from './AntdButton.tsx';
import { CATEGORIES } from '../utils/constant.ts';
import Card from './Card.tsx';

const EXPORT_IMG_BACKGROUND = [
  'linear-gradient(90deg, #fe5a5a, #f163d2)',
  'linear-gradient(90deg, #DD5AFE, #6366F1)',
  'linear-gradient(90deg, #49DD81, #22B4C6)',
  'linear-gradient(90deg, #43A6F6, #5868F3)',
  'linear-gradient(90deg, #FE955A, #F1DA63)',
];

const ListCard = () => {
  const [selectedCate, setSelectedCate] = useState(CATEGORIES[0]);

  const handleClickCate = (item: string) => setSelectedCate(item);
  return (
    <div className="list-card">
      <div className="list-card__category">
        {CATEGORIES.map((item) => (
          <AntdButton
            isSelected={selectedCate === item}
            onClick={() => handleClickCate(item)}
            key={item}
            text={item}
          />
        ))}
      </div>
      <div className="list-card__content">
        <div className="list-card__container">
          {[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
          ].map((item) => (
            <Card
              background={EXPORT_IMG_BACKGROUND[Math.floor(Math.random() * 5)]}
              key={item}
            />
          ))}
        </div>
      </div>
      <div className="list-card__footer">
        <AntdButton text="View more" />
      </div>
    </div>
  );
};
export default ListCard;
