import React, { useEffect } from 'react';
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
      <Div>
        <Link to="/cleanup">go to useEffect cleanup</Link>
      </Div>
      <Div>
        <Link to="/audio-recorder">go to audio-recorder</Link>
      </Div>
      <Div>
        <Link to="/drag-and-drop">go to drag and drop</Link>
      </Div>
      <Div>
        <Link to="/toast-ui-editor">go to toast-ui-editor</Link>
      </Div>
      <Div>
        <Link to="/sass-test">go to sass-test</Link>
        {/* editor-quill */}
      </Div>
      <Div>
        <Link to="/editor-quill">go to editor-quill</Link>
      </Div>
    </>
  );
}

export default Home;
