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

## Devtools 사용
- Redux devtools를 사용할 수 있다
  - 하나의 store에만 적용이 된다
    - 사용할거면 거대한 store하나에 사용하거나
    - 작은 스토어를 여러개 사용하는 경우엔 디버그할 때만 사용해야될 것 같다

## 참고
- https://velog.io/@choigeon96/JavaScript-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-Zustand