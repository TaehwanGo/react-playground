import React from 'react';
import Name from '@/components/Name';
import useCountStore from '@/store/useCountStore';

const StudyZustand = () => {
  const { count, increaseCount } = useCountStore();
  return (
    <div>
      <h1>StudyZustand</h1>
      <div>
        <h4>click button below</h4>
        <button type="button" onClick={increaseCount}>
          {count}
        </button>
      </div>
      <Name />
    </div>
  );
};

export default StudyZustand;
