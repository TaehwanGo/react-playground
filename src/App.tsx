import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './routers/router';

function App() {
  const [a, setA] = useState<string>();

  useEffect(() => {
    console.log(setA('A'));
  }, []);
  return <Router />;
}

export default App;
