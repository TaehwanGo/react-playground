import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: #2ecc71;
  width: 100%;
  height: 200px;
`;

const Main = styled.main`
  background-color: #3498db;
  width: 100%;
  flex-grow: 1;
  position: relative;
  padding: 25px;
`;

const ControlBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  transform: translateY(-50%);
  background-color: orange;
  cursor: row-resize;
`;

const ResizeElement = () => {
  // const setMainHeight = (height: number) => {
  //   const main = document.querySelector('main');
  //   if (main) {
  //     main.style.height = `${height}px`;
  //   }
  // };
  // const onMouseMove = (e: MouseEvent) => {
  //   const { pageY } = e;
  //   const { top } = e.currentTarget!.getBoundingClientRect();
  //   const offset = pageY - top;
  //   const height = pageY - offset;
  //   // e.currentTarget!.parentElement!.style.height = `${height}px`;
  //   setMainHeight(height);
  // };
  // const onMouseUp = () => {
  //   document.removeEventListener('mousemove', onMouseMove);
  //   document.removeEventListener('mouseup', onMouseUp);
  // };

  return (
    <Page>
      <Header>Header</Header>
      <Main>
        <ControlBar />
        Main
      </Main>
    </Page>
  );
};

export default ResizeElement;
