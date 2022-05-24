import React from 'react';
import create from 'zustand';
import Name from '@/components/Name';

type CountStore = {
  count: number;
  increaseCount: () => void;
};

export const useCountStore = create<CountStore>((set) => ({
  count: 1,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
}));

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
