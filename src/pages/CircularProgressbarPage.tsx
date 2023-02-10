import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

/**
 * https://www.npmjs.com/package/react-circular-progressbar
 */
const CircularProgressbarPage = () => {
  const percentage = 66;

  return (
    <div>
      <h1>Circular Progressbar</h1>
      <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
    </div>
  );
};

export default CircularProgressbarPage;
