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
  justify-content: center;
  align-items: center;
  background: ${color.blue700};
  color: ${color.white};
  width: 100px;
  height: 50px;
  border: solid;
  border-radius: 10px;
  cursor: pointer;
  ${(props) => props.hover && `border-color: ${color.white};`};
`;

export { Root };
