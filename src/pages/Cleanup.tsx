import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
  padding: 20px;
`;

const Cleanup = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log('count', count);
    return () => {
      console.log('cleanup', count);
    };
  }, [count]);

  return (
    <Div>
      <h1>Cleanup</h1>
      <p>{count}</p>
      <button type="button" onClick={handleIncrease}>
        increase
      </button>
      <div>
        <Link to="/">go home</Link>
      </div>
    </Div>
  );
};

export default Cleanup;
