import { ConfigProvider, Select } from 'antd';
import React from 'react';
import ImgIcon from './ImgIcon.tsx';
import ChevronDown from '../assets/icons/chevron-down.svg';

const AntdSelect = () => (
  <ConfigProvider
    theme={{
      components: {
        Select: {
          selectorBg: 'transparent',
          colorBorder: '#3A3841',
          colorTextBase: 'white',
          colorTextLabel: 'black',
          optionSelectedColor: 'white',
          controlHeight: 40,
        },
      },
      token: {
        colorTextPlaceholder: 'white',
        colorTextDescription: 'white',
        borderRadius: 4,
      },
    }}
  >
    <Select
      showSearch
      placeholder="Select a person"
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
      suffixIcon={<ImgIcon size={20} src={ChevronDown} />}
      options={[
        { value: '1', label: 'Jack' },
        { value: '2', label: 'Lucy' },
        { value: '3', label: 'Tom' },
      ]}
    />
  </ConfigProvider>
);

export default AntdSelect;
