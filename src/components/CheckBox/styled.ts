import color from 'constants/color';
import styled from 'styled-components';

type RootProps = {
  width?: number;
  height?: number;
  backgroundColor?: string;
  hover?: boolean;
};

const Root = styled.div<RootProps>`
  display: flex;
`;

export { Root };
