import React from 'react';
import AntdSlider from './AntdSlider.tsx';
import useProductSearch from '../hooks/useProductSearch.ts';

const SliderSection = () => {
  const { searchOptions, setSearchOptions } = useProductSearch();
  return (
    <div className="slider-section">
      <div className="slider-title">Price</div>
      <AntdSlider
        range
        min={0.01}
        max={200}
        defaultValue={[searchOptions.from, searchOptions.to]}
        onChange={(value) => {
          const [from, to] = value;
          setSearchOptions({ from, to });
        }}
      />
      <div className="slider-marks">
        <div className="item">0.01 ETH</div>
        <div className="item">200 ETH</div>
      </div>
    </div>
  );
};
export default SliderSection;
