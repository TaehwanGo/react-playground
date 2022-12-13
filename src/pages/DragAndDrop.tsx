import React from 'react';
import styled from 'styled-components';
import ReOrder from '@/components/dragAndDrop/ReOrder';
import MovingItemBetweenColumns from '@/components/dragAndDrop/MovingItemBetweenColumns';

const Div = styled.div`
  padding: 10px;
`;

const DragAndDrop = () => {
  return (
    <Div>
      <h1>DragAndDrop</h1>
      <h2>Re order</h2>
      <ReOrder />
      <h2>Column</h2>
      {/* TODO: ReOrder에 column drag and drop 구현하기 */}
      <MovingItemBetweenColumns />
    </Div>
  );
};

export default DragAndDrop;
