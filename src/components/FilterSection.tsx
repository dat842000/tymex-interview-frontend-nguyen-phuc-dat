import React, { useState } from 'react';
import AntdSelect from '../common/antd/AntdSelect';
import AntdInput from '../common/antd/AntdInput';
import SliderSection from './SliderSection';
import AntdButton from '../common/antd/AntdButton';
import { FilterOutlined } from '@ant-design/icons';
import AntdModal from '../common/antd/AntdModal';
import ImgIcon from './ImgIcon';
import useProductSearch from '../hooks/useProductSearch';

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
  { value: 'desc', label: 'HIGH TO LOW' },
  { value: 'asc', label: 'LOW TO HIGH' },
];

export const TIME_OPTION = [
  { value: 'desc', label: 'LATEST' },
  { value: 'asc', label: 'OLDEST' },
];

const FilterSection = () => {
  const [priceRange, setPriceRange] = useState<number[]>([0.01, 100]);
  const [filterTheme, setFilterTheme] = useState<string>('All');
  const [filterTier, setFilterTier] = useState<string>('All');
  const [sortPrice, setSortPrice] = useState<string>('');
  const [sortTime, setSortTime] = useState<string>('');
  const { setProducts, setSearchOptions } = useProductSearch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSortTime = (option: string) => {
    setSortTime(option);
    setSortPrice('');
  };
  const handleSortPrice = (option: string) => {
    setSortPrice(option);
    setSortTime('');
  };

  const clearFilter = () => {
    handleCancel();
    setProducts([]);
    setSearchOptions({
      pageNumber: 1,
      filterTier: 'All',
      filterTheme: 'All',
      sortPrice: '',
      sortTime: '',
      from: 0,
      to: 100,
    });
  };

  const handleFilter = () => {
    handleCancel();
    setProducts([]);
    const [from, to] = priceRange;

    setSearchOptions({
      pageNumber: 1,
      filterTier,
      filterTheme,
      sortPrice,
      sortTime,
      from,
      to,
    });
  };

  return (
    <>
      <div className="filter-section">
        <AntdButton
          onClick={showModal}
          className="filter-btn"
          text=""
          icon={<FilterOutlined />}
        />
        <AntdInput
          onChange={(e) => {
            setProducts([]);
            setSearchOptions({
              textSearch: e.target.value,
              pageNumber: 1,
            });
          }}
          placeholder="Quick search"
        />
        <SliderSection setRange={setPriceRange} />
        <div className="filter-section__group">
          <span>Tier</span>
          <AntdSelect
            onChange={(value) => setFilterTier(value)}
            placeholder="Select tier"
            options={TIER_OPTION}
          />
        </div>
        <div className="filter-section__group">
          <span>Theme</span>
          <AntdSelect
            onChange={(value) => setFilterTheme(value)}
            placeholder="Select theme"
            options={THEME_OPTION}
          />
        </div>
        <div className="filter-section__group">
          <span>Time</span>
          <AntdSelect
            value={sortTime}
            onChange={(value) => handleSortTime(value)}
            placeholder="Select time"
            options={TIME_OPTION}
          />
        </div>
        <div className="filter-section__group">
          <span>Price</span>
          <AntdSelect
            value={sortPrice}
            onChange={(value) => handleSortPrice(value)}
            placeholder="Select price"
            options={PRICE_OPTION}
          />
        </div>
        <div className="filter-section__submit">
          <div className="reset-btn" onClick={clearFilter}>
            <ImgIcon width={24} height={24} src={'/icons/close.png'} />
            Reset filter
          </div>
          <AntdButton onClick={handleFilter} text="Search" />
        </div>
      </div>
      <AntdModal
        onCancel={handleCancel}
        styles={{ body: { background: "'#1a1532 !important'" } }}
        open={isModalOpen}
      >
        <SliderSection setRange={setPriceRange} />
        <div className="filter-section__group">
          <span>Tier</span>
          <AntdSelect
            onChange={(value) => setFilterTier(value)}
            placeholder="Select tier"
            options={TIER_OPTION}
          />
        </div>
        <div className="filter-section__group">
          <span>Theme</span>
          <AntdSelect
            onChange={(value) => setFilterTheme(value)}
            placeholder="Select theme"
            options={THEME_OPTION}
          />
        </div>
        <div className="filter-section__group">
          <span>Time</span>
          <AntdSelect
            value={sortTime}
            onChange={(value) => handleSortTime(value)}
            placeholder="Select time"
            options={TIME_OPTION}
          />
        </div>
        <div className="filter-section__group">
          <span>Price</span>
          <AntdSelect
            value={sortPrice}
            onChange={(value) => handleSortPrice(value)}
            placeholder="Select price"
            options={PRICE_OPTION}
          />
        </div>
        <div className="filter-section__submit">
          <div className="reset-btn" onClick={clearFilter}>
            <ImgIcon width={24} height={24} src={'/icons/close.png'} />
            Reset filter
          </div>
          <AntdButton onClick={handleFilter} text="Search" />
        </div>
      </AntdModal>
    </>
  );
};
export default FilterSection;
