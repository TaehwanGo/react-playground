import React from 'react';
import styled from 'styled-components';
import ReOrder from '@/components/dragAndDrop/ReOrder';

const Div = styled.div`
  padding: 10px;
`;

const DragAndDrop = () => {
  return (
    <Div>
      <h1>DragAndDrop</h1>
      <h2>Re order</h2>
      <ReOrder />
    </Div>
  );
};

export default DragAndDrop;
