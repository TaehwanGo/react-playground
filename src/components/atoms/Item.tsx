import styled from 'styled-components';
import { colorPalette } from '@/styles/colorPalette';

const Item = styled.li`
  border: 1px solid whitesmoke;
  padding: 10px;
  margin: 10px;
  background-color: ${colorPalette.background};
`;

export default Item;
