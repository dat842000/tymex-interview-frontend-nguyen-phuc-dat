import { ConfigProvider, Slider, SliderSingleProps } from 'antd';
import { createStyles } from 'antd-style';
import { SliderRangeProps } from 'antd/es/slider';
import React from 'react';

const useStyles = () => {
  // Customize styles
  return createStyles(({ css }) => ({
    slider: css`
      .ant-slider-rail {
        background: #3a3841;
        border-radius: 2px;
      }
      .ant-slider-track {
        background: linear-gradient(
          91.27deg,
          rgba(218, 69, 143, 0) 0.55%,
          #da41a2 24.03%,
          #da37ce 83.19%,
          rgba(218, 52, 221, 0) 102.8%
        );
      }
      .ant-slider-handle {
        border-color: #fff;
        box-shadow:
          0 0 10px #d73895,
          0 0 20px #d73895;
      }

      .ant-slider-handle:hover {
        border-color: #fff;
      }
    `,
  }))();
};

const AntdSlider = ({ ...props }: SliderSingleProps | SliderRangeProps) => {
  const { styles } = useStyles();
  return (
    <ConfigProvider
      slider={{ className: styles.slider }}
      theme={{
        components: {
          Slider: {
            colorBorder: '#3A3841',
            railHoverBg: '#3a3841',
          },
        },
      }}
    >
      <Slider
        styles={{
          rail: { height: 8 },
          track: {
            background:
              'linear-gradient(91.27deg, #da458f00 0.55%, #DA41A2 24.03%, #DA37CE 83.19%, #da34dd00 102.8%)',
            height: 8,
          },
          handle: {
            boxShadow: '0 0 1rem 0.1875rem #da40a387',
          },
        }}
        {...props}
      />
    </ConfigProvider>
  );
};

export default AntdSlider;
