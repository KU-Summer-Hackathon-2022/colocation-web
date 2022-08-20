import React from 'react';
import { Root } from './styled';

type Props = {
  src: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  rotate?: number;
};

const Image: React.FC<Props> = ({
  src,
  width = 7.79,
  height = 5.25,
  borderRadius = 0,
  rotate = 0,
}) => {
  return (
    <Root
      src={src}
      width={width}
      height={height}
      borderRadius={borderRadius}
      rotate={rotate}
    ></Root>
  );
};

export default Image;
