import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
  padding: 10px;
`;

function Home() {
  return (
    <>
      <h1>home</h1>
      <Div>
        <Link to="/about">go to about</Link>
      </Div>
      <Div>
        <Link to="/files">go to file download</Link>
      </Div>
    </>
  );
}

export default Home;
