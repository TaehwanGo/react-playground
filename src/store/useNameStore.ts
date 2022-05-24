import create from 'zustand';
import { devtools } from 'zustand/middleware';

type NameStore = {
  name: string;
  setName: (name: string) => void;
};

const useNameStore = create(
  devtools<NameStore>(
    (set) => ({
      name: '',
      setName: (name: string) => set(() => ({ name })),
    }),
  ),
);

export default useNameStore;
