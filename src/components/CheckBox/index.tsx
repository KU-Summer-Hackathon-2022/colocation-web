import React, { Children, ReactNode, useState } from 'react';
import { Root } from './styled';

type Props = {
  onClick?: () => void;
  children?: ReactNode | string;
  isChecked?: boolean;
};

const CheckBox: React.FC<Props> = ({ onClick, children, isChecked = false }) => {
  return <Root onClick={onClick}>{children}</Root>;
};

export default CheckBox;
