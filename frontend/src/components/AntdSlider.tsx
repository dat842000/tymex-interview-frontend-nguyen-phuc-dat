import { ConfigProvider, Slider, SliderSingleProps } from 'antd';
import { createStyles } from 'antd-style';
import React from 'react';

const useButtonStyle = () => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const btnPrefixCls = getPrefixCls('btn');

  // Customize styles
  return createStyles(({ css }) => ({
    btn: css`
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
    `,
  }))();
};

const AntdSlider = () => {
  const { styles } = useButtonStyle();
  return (
    <ConfigProvider
      slider={{ className: styles.btn }}
      theme={{
        components: {
          Slider: {
            colorBorder: '#3A3841',
            railHoverBg: '#3a3841',
          },
        },
      }}
    >
      <Slider range defaultValue={[20, 50]} />
    </ConfigProvider>
  );
};

export default AntdSlider;
