import React, { Children, ReactNode, useState } from 'react';
import { Root } from './styled';
import color from 'constants/color';

type Props = {
  color?: string;
  fontSize?: number;
  children: ReactNode | string;
};

const Typo: React.FC<Props> = ({ color = '#000', fontSize = 10, children }) => {
  return (
    <Root color={color} fontSize={fontSize}>
      {children}
    </Root>
  );
};

export default Typo;
