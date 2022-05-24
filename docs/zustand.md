# zustand

- (독일어) 상태
- redux, recoil 같은 전역 상태관리 라이브러리
- 공식 데모 프로젝트 : https://codesandbox.io/s/xgjtc

```ts
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
```

이렇게 간단하게 Provider 도 없이 import해서 사용하면 그대로 전역 상태가 공유 됨
