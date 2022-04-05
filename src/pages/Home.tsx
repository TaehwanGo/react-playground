import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>home</h1>
      <Link to="/about">go to about</Link>
    </>
  );
}

export default Home;
