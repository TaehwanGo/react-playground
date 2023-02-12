import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  height: 200px;
  padding: 20px;
`;

/**
 * https://www.npmjs.com/package/react-circular-progressbar
 */
const CircularProgressbarPage = () => {
  const percentage = 66;

  const [value, setValue] = React.useState(0);

  return (
    <div>
      <h1>Circular Progressbar</h1>
      <Container>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </Container>
      <Container>
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          circleRatio={0.75}
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            strokeLinecap: 'butt',
            trailColor: '#eee',
          })}
        />
        <input
          type="text"
          onChange={(e) => {
            setValue(parseInt(e.target.value === '' ? '0' : e.target.value, 10));
          }}
          style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
        />
      </Container>
    </div>
  );
};

export default CircularProgressbarPage;
