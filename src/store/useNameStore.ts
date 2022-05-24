import create from 'zustand';

type NameStore = {
  name: string;
  setName: (name: string) => void;
};

const useNameStore = create<NameStore>((set) => ({
  name: '',
  setName: (name: string) => set(() => ({ name })),
}));

export default useNameStore;
