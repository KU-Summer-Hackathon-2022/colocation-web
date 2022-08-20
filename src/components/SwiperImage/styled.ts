import React from 'react';
import styled from 'styled-components';

type RootProps = {
  width?: number;
  height?: number;
  borderRadius?: number;
  rotate?: number;
};

const Root = styled.img<RootProps>`

`;

export { Root };
