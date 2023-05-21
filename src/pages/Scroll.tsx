import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    background-color: greenyellow;
    border-radius: 8px;
  }
  &::-webkit-scrollbar {
    background-color: orange;
    border-radius: 8px;
    height: 30px;
    width: 20px;
  }

  /* &::-webkit-scrollbar-track {
    background-color: red;
    border-radius: 8px;
  } */

  touch-action: pan-y;
`;

const TestBox = styled.div`
  width: 200vw;
  height: 200vh;
  background: linear-gradient(135deg, #00b4db 0%, #013cff 100%);
`;

export default function ScrollPage() {
  return (
    <PageContainer>
      <TestBox>test</TestBox>
    </PageContainer>
  );
}
