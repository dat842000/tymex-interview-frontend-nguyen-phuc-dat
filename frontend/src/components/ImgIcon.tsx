import React from 'react';
import { Property } from 'csstype';

type CustomStyle = {
  height?: Property.Height<string | number>;
  width?: Property.Width<string | number>;
};

type SelfProps = {
  src: string;
  size?: number;
};

type Props = SelfProps & CustomStyle;

export default function ImgIcon({ src, height, width, size = 16 }: Props) {
  return (
    <img
      style={{
        height: height ? height : `${size}px`,
        width: width ? width : `${size}px`,
      }}
      src={src}
    />
  );
}
