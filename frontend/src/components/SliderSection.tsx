import React from 'react';
import AntdSlider from '../common/antd/AntdSlider';
import useProductSearch from '../hooks/useProductSearch';
import { MAX_PRICE, MIN_PRICE } from '../utils/constant';

interface SelfProps {
  setRange: React.Dispatch<React.SetStateAction<number[]>>;
}

const SliderSection = ({ setRange }: SelfProps) => {
  const { searchOptions } = useProductSearch();
  return (
    <div className="slider-section">
      <div className="slider-title">Price</div>
      <AntdSlider
        range
        min={MIN_PRICE}
        max={MAX_PRICE}
        defaultValue={[searchOptions.from, searchOptions.to]}
        onChange={(value) => setRange(value)}
      />
      <div className="slider-marks">
        <div className="item">{`${MIN_PRICE} ETH`}</div>
        <div className="item">{`${MAX_PRICE} ETH`}</div>
      </div>
    </div>
  );
};
export default SliderSection;
