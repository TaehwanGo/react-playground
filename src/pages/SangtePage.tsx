import React from 'react';
// import { sangte, useSangte } from 'sangte';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
`;

// const countState = sangte(0);

const SangtePage = () => {
  //   const [count, setCount] = useSangte(countState);

  return (
    <PageContainer>
      <h1>Sangte</h1>
      {/* <p>count: {count}</p> */}
      {/* <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setCount(0)}>
        Reset
      </button> */}
    </PageContainer>
  );
};

export default SangtePage;
