import color from 'constants/color';
import styled from 'styled-components';

type RootProps = {
  color?: string;
  fontSize?: number;
};

const Root = styled.div<RootProps>`
  ${(props) => `color: ${props.color};`}
  ${(props) => `font-size: ${props.fontSize}px;`}
`;

export { Root };
