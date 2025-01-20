import React from 'react';
import AntdSlider from './AntdSlider.tsx';
import useProductSearch from '../hooks/useProductSearch.ts';

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
        min={0.01}
        max={200}
        defaultValue={[searchOptions.from, searchOptions.to]}
        onChange={(value) => setRange(value)}
      />
      <div className="slider-marks">
        <div className="item">0.01 ETH</div>
        <div className="item">200 ETH</div>
      </div>
    </div>
  );
};
export default SliderSection;
