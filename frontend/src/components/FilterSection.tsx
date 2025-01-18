import React from 'react';
import { Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import ImgIcon from './ImgIcon.tsx';
import ChevronDown from '../assets/icons/chevron-down.svg';
import AntdSelect from './AntdSelect.tsx';
import AntdInput from './AntdInput.tsx';
import SliderSection from './SliderSection.tsx';

const FilterSection = () => {
  return (
    <div className="filter-section">
      <AntdInput />
      <SliderSection />
      <div className="filter-section__group">
        <span>Tier</span>
        <AntdSelect />
      </div>
      <div className="filter-section__group">
        <span>Theme</span>
        <AntdSelect />
      </div>
      <div className="filter-section__group">
        <span>Time</span>
        <AntdSelect />
      </div>
      <div className="filter-section__group">
        <span>Price</span>
        <AntdSelect />
      </div>
    </div>
  );
};
export default FilterSection;
