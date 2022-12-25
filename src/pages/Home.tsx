import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SnowFlake, { MIN_DURATION } from '@/components/atoms/SnowFlake';

const Div = styled.div`
  padding: 10px;
`;

function Home() {
  const [snowFlakes, setSnowFlakes] = React.useState<JSX.Element[]>([]);

  const makeSnowFlake = () => {
    const duration = Math.random() * 20 + MIN_DURATION;
    const delay = Math.random() * 10;

    setSnowFlakes((prev) => [
      ...prev,
      <SnowFlake
        key={(duration + delay) * new Date().getMilliseconds()}
        animationDelay={delay}
        animationDuration={duration}
      />,
    ]);

    setTimeout(() => {
      setSnowFlakes((prev) => prev.slice(1));
    }, (duration + delay) * 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      makeSnowFlake();
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {snowFlakes}
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
    </>
  );
}

export default Home;
