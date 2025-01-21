import { ConfigProvider, Select } from 'antd';
import React from 'react';
import { createStyles } from 'antd-style';
import { SelectProps } from 'antd/es/select/index';

const useStyles = () => {
  // Customize styles
  return createStyles(({ css }) => ({
    select: css`
      .ant-select-selector {
        color: white;
      }
    `,
  }))();
};

const AntdSelect = ({ ...props }: SelectProps) => {
  const { styles } = useStyles();
  return (
    <ConfigProvider
      select={{ className: styles.select }}
      theme={{
        components: {
          Select: {
            selectorBg: 'transparent',
            colorBorder: '#3A3841',
            colorTextBase: 'white',
            colorTextLabel: 'black',
            optionSelectedColor: 'black',
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
      <Select {...props} />
    </ConfigProvider>
  );
};

export default AntdSelect;
