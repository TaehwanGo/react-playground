import styled from 'styled-components';
import { colorPalette } from '@/styles/colorPalette';

interface ItemProps {
  isDragging?: boolean;
}
const Item = styled.li<ItemProps>`
  border: 1px solid whitesmoke;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => {
    return props.isDragging ? colorPalette.isDragging : colorPalette.background;
  }};
`;

export default Item;
