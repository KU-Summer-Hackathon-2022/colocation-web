import React, { Children, ReactNode, useState } from 'react';
import { Root } from './styled';

type Props = {
  width?: number;
  height?: number;
  onClick?: () => void;
  children: ReactNode | string;
};

const Button: React.FC<Props> = ({ width, height, onClick, children }) => {
  const [hover, setHover] = useState<boolean>(false);
  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };
  return (
    <Root
      width={width}
      height={height}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      hover={hover}
    >
      {children}
    </Root>
  );
};

export default Button;
