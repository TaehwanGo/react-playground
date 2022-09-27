import React, { useRef } from 'react';

const RefUpdate = () => {
  const countRef = useRef(0);
  const [count, setCount] = React.useState(countRef.current);

  return (
    <div>
      <h1>Ref Update</h1>
      <p>{count}</p>
      <button
        type="button"
        onClick={() => {
          countRef.current += 1;
          setCount(countRef.current);
          console.log('countRef.current', countRef.current);
        }}
      >
        increase
      </button>
    </div>
  );
};

export default RefUpdate;
