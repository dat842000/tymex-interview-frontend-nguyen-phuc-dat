import React from 'react';
import { Property } from 'csstype';

type CustomStyle = {
  height?: Property.Height<string | number>;
  width?: Property.Width<string | number>;
};

type SelfProps = {
  src: string;
  alt?: string;
  className?: string;
  size?: number;
};

type Props = SelfProps & CustomStyle;

const ImgIcon = ({
  src,
  alt = 'img-icon',
  className = 'img-icon',
  height,
  width,
  size = 24,
}: Props) => {
  return (
    <img
      alt={alt}
      className={className}
      style={{
        height: height ? height : `${size}px`,
        width: width ? width : `${size}px`,
      }}
      src={src}
    />
  );
};
export default ImgIcon;
