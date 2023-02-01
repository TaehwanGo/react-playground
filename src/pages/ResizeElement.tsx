import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  margin: 50px;
`;

interface HeaderProps {
  height: number;
}

const Header = styled.header<HeaderProps>`
  background-color: #2ecc71;
  height: ${(props) => props.height}px;
  position: relative;
`;

const HeaderInner = styled.div`
  padding: 25px;
  height: 100%;
`;

const Main = styled.main`
  background-color: #3498db;
  flex-grow: 1;
  height: 100%;
  padding: 25px;
`;

const ControlBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  transform: translateY(50%);
  background-color: orange;
  cursor: row-resize;
`;

const ResizeElement = () => {
  // 만약 변경된 높이를 새로고침해도 유지하고 싶다면
  // localStorage에 저장하고, useEffect에서 localStorage에서 값을 가져와서
  // setHeaderHeight를 호출하면 된다.
  const [headerHeight, setHeaderHeight] = React.useState(200);

  const onMouseMove = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const contentsContainer = target.parentElement as HTMLElement;
    const offsetTop = contentsContainer?.offsetTop;
    const newHeight = e.clientY - offsetTop;
    console.log('onMouseMove newHeight', newHeight);
    setHeaderHeight(e.clientY - offsetTop);
  };

  const onMouseDown = () => {
    window.addEventListener('mousemove', onMouseMove);
    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
    window.addEventListener('mouseup', onMouseUp);
  };

  return (
    <Page>
      <Header className="contentsContainer" height={headerHeight}>
        <HeaderInner>Header</HeaderInner>
        <ControlBar onMouseDown={onMouseDown} />
      </Header>
      <Main className="contentsContainer">Main</Main>
    </Page>
  );
};

export default ResizeElement;
