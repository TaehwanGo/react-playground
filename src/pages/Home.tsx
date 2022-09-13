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
      <Div>
        <Link to="/table">go to file react table</Link>
      </Div>
      <Div>
        <Link to="/upload">go to file upload</Link>
      </Div>
      <Div>
        <Link to="/nested-routing">go to nested routing</Link>
      </Div>
      <Div>
        <Link to="/add-component">go to add dynamically component</Link>
      </Div>
      <Div>
        <Link to="/list-performance">go to list performance test</Link>
      </Div>
    </>
  );
}

export default Home;
