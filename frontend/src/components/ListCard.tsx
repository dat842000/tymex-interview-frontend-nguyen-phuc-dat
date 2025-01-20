import React from 'react';
import AntdButton from '../common/antd/AntdButton';
import Card from './Card';
import useProductSearch from '../hooks/useProductSearch';
import AntdTabs from '../common/antd/AntdTabs';
import ImgIcon from './ImgIcon';
import CardSkeleton from './CardSkeleton';

export const CATEGORY_OPTION = [
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
  { value: 'Common', label: 'Common' },
];

const ListCard = () => {
  const {
    products,
    isError,
    isFetching,
    fetchNextPage,
    setSearchOptions,
    setProducts,
  } = useProductSearch();

  const loadMore = () => {
    fetchNextPage();
  };

  const handleClickCate = (item: string) => {
    setProducts([]);
    setSearchOptions({ pageNumber: 1, filterCate: item });
  };

  const displayProducts = !isError && products.length > 0;
  const displayEmptyProduct = !isError && !isFetching && products.length === 0;
  const displayLoadingCard = !isError && isFetching;
  const displayLoadMore = !isError && (isFetching || products.length !== 0);
  return (
    <div className="list-card">
      <div className="list-card__category">
        <AntdTabs
          defaultValue={CATEGORY_OPTION[0].value}
          onChange={(activeKey) => handleClickCate(activeKey)}
          tabPosition="top"
          moreIcon={<ImgIcon size={24} src={'/icons/chevron-down.svg'} />}
          items={CATEGORY_OPTION.map((cate) => ({
            label: cate.label,
            key: cate.value,
          }))}
        />
      </div>

      <div className="list-card__content">
        <div className="list-card__container">
          {displayProducts &&
            products.map((item) => <Card key={item.id} product={item} />)}
          {isError && <div className="msg-container">Something wrong</div>}
          {displayEmptyProduct && (
            <div className="msg-container">Data empty</div>
          )}
          {displayLoadingCard &&
            Array.from({ length: 10 }, (_, index) => (
              <CardSkeleton key={index} />
            ))}
        </div>
      </div>
      <div className="list-card__footer">
        {displayLoadMore && (
          <AntdButton
            loading={isFetching}
            onClick={loadMore}
            text="View more"
          />
        )}
      </div>
    </div>
  );
};
export default ListCard;
