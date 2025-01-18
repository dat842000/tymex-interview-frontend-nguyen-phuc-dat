import React from 'react';
import AntdSlider from './AntdSlider.tsx';

const SliderSection = () => {
  return (
    <div className="slider-section">
      <div className="slider-title">Price</div>
      <AntdSlider />
      <div className="slider-marks">
        <div className="item">0.01 ETH</div>
        <div className="item">200 ETH</div>
      </div>
    </div>
  );
};
export default SliderSection;
