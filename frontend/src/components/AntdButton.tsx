import { Button, ConfigProvider } from 'antd';
import React, { DOMAttributes } from 'react';
import { createStyles } from 'antd-style';
import { BaseButtonProps } from 'antd/es/button/button';

interface SelfProps<T = HTMLButtonElement>
  extends BaseButtonProps,
    DOMAttributes<T> {
  isSelected?: boolean;
  text: string;
}

const useStyle = createStyles(
  ({ prefixCls, css }, { isSelected }: { isSelected: boolean }) => ({
    linearGradientButton: css`
      &.${prefixCls}-btn-primary:not([disabled]):not(
          .${prefixCls}-btn-dangerous
        ) {
        > span {
          position: relative;
        }

        &::before {
          content: '';
          background: ${isSelected
            ? 'linear-gradient(90deg,rgba(218, 69, 143, 1),rgba(218, 52, 221, 1))'
            : 'rgba(64,24,53,1)'};
          position: absolute;
          inset: -1px;
          opacity: 1;
          transition: all 0.3s;
          border-radius: inherit;
        }

        &:hover::before {
          opacity: 0;
        }
      }
    `,
    colorPrimary: '#da34dd',
  }),
);

const AntdButton = ({ text, isSelected = true, ...props }: SelfProps) => {
  const { styles } = useStyle({ isSelected });
  return (
    <ConfigProvider
      button={{
        className: styles.linearGradientButton,
      }}
      theme={{
        token: {
          colorPrimary: 'rgba(218, 69, 143, 1)',
          borderRadius: 4,
        },
      }}
    >
      <Button type="primary" {...props}>
        {text}
      </Button>
    </ConfigProvider>
  );
};
export default AntdButton;
