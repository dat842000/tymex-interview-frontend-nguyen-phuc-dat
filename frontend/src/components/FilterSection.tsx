import React, { useState } from 'react';
import AntdSelect from './AntdSelect.tsx';
import AntdInput from './AntdInput.tsx';
import SliderSection from './SliderSection.tsx';
import useProductSearch from '../hooks/useProductSearch.ts';
import { DefaultOptionType } from 'antd/es/select/index';

export const TIER_OPTION = [
  { value: 'All', label: 'ALL' },
  { value: 'Basic', label: 'BASIC' },
  { value: 'Premium', label: 'PREMIUM' },
  { value: 'Deluxe', label: 'DELUXE' },
];

export const THEME_OPTION = [
  { value: 'All', label: 'ALL' },
  { value: 'Dark', label: 'DARK' },
  { value: 'Light', label: 'LIGHT' },
  { value: 'Colorful', label: 'COLORFUL' },
  { value: 'Halloween', label: 'HALLOWEEN' },
];

export const PRICE_OPTION = [
  { value: 'none', label: 'NONE' },
  { value: 'desc', label: 'HIGH TO LOW' },
  { value: 'asc', label: 'LOW TO HIGH' },
];

export const TIME_OPTION = [
  { value: 'none', label: 'NONE' },
  { value: 'desc', label: 'LATEST' },
  { value: 'asc', label: 'OLDEST' },
];

const FilterSection = () => {
  const { setSearchOptions } = useProductSearch();
  const [sortPrice, setSortPrice] = useState<DefaultOptionType>({
    value: '',
    label: '',
  });
  const [sortTime, setSortTime] = useState<DefaultOptionType>({
    value: '',
    label: '',
  });
  const handleSortTime = (option) => {
    setSortTime(option);
    setSortPrice({
      value: '',
      label: '',
    });
    setSearchOptions({ sortPrice: option.value, sortTime: '' });
  };
  const handleSortPrice = (option) => {
    setSortPrice(option);
    setSortTime({
      value: '',
      label: '',
    });
    setSearchOptions({ sortTime: option.value, sortPrice: '' });
  };

  const handleFilter = (option) => {
    setSearchOptions(option);
  };

  return (
    <div className="filter-section">
      <AntdInput
        onChange={(e) => {
          setSearchOptions({ textSearch: e.target.value });
        }}
        placeholder="Quick search"
      />
      <SliderSection />
      <div className="filter-section__group">
        <span>Tier</span>
        <AntdSelect
          onChange={(value) => handleFilter({ filterTier: value })}
          placeholder="Select tier"
          options={TIER_OPTION}
        />
      </div>
      <div className="filter-section__group">
        <span>Theme</span>
        <AntdSelect
          onChange={(value) => handleFilter({ filterTheme: value })}
          placeholder="Select theme"
          options={THEME_OPTION}
        />
      </div>
      <div className="filter-section__group">
        <span>Time</span>
        <AntdSelect
          value={sortTime}
          onChange={(_, option) => handleSortTime(option)}
          placeholder="Select time"
          options={TIME_OPTION}
        />
      </div>
      <div className="filter-section__group">
        <span>Price</span>
        <AntdSelect
          value={sortPrice}
          onChange={(_, option) => handleSortPrice(option)}
          placeholder="Select price"
          options={PRICE_OPTION}
        />
      </div>
    </div>
  );
};
export default FilterSection;
