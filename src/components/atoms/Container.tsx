import styled from 'styled-components';
import { colorPalette } from '@/styles/colorPalette';

interface ContainerProps {
  isDraggingOver?: boolean;
}
const Container = styled.ul<ContainerProps>`
  list-style: none;
  padding: 10px;
  height: 300px;
  border: 1px solid ${colorPalette.border};
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? colorPalette.isDraggingOver : colorPalette.background};
`;

export default Container;
