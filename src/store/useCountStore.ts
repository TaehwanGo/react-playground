import create from 'zustand';
import { devtools } from 'zustand/middleware';

type CountStore = {
  count: number;
  increaseCount: () => void;
};

const useCountStore = create(
  devtools<CountStore>(
    (set) => ({
      count: 1,
      increaseCount: () => set((state) => ({ count: state.count + 1 })),
    }),
  ),
);

export default useCountStore;
