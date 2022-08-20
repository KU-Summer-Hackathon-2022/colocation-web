import React from 'react';
import styled from 'styled-components';

type RootProps = {
  width?: number;
  height?: number;
  borderRadius?: number;
  rotate?: number;
};

const Root = styled.img<RootProps>`
  ${(props) => `width: ${props.width}px;`}
  ${(props) => `height: ${props.height}px;`}
  ${(props) => `border-radius: ${props.borderRadius}px;`}
  ${(props) => `transform: rotate(${props.rotate}turn);`}
  &&& {
    object-fit: contain;
  }
`;

export { Root };
