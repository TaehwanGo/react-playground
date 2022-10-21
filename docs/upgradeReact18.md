# React 18버전으로 올리기

- https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html

## installing

```
npm install react react-dom
```

```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR!
npm ERR! While resolving: @craco/craco@6.4.3
npm ERR! Found: react-scripts@5.0.0
npm ERR! node_modules/react-scripts
npm ERR!   react-scripts@"5.0.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer react-scripts@"^4.0.0" from @craco/craco@6.4.3
npm ERR! node_modules/@craco/craco
npm ERR!   @craco/craco@"^6.4.3" from the root project
npm ERR!
npm ERR! Conflicting peer dependency: react-scripts@4.0.3
npm ERR! node_modules/react-scripts
npm ERR!   peer react-scripts@"^4.0.0" from @craco/craco@6.4.3
npm ERR!   node_modules/@craco/craco
npm ERR!     @craco/craco@"^6.4.3" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
```

- 에러 발생
  - https://stackoverflow.com/questions/66020820/npm-when-to-use-force-and-legacy-peer-deps
  - --legacy-peer-deps
    - npm4~6 버전과 같이 모든 peerDependencies를 무시
  - --force
    - 로컬 복사본이 디스크에 있더라도 npm이 원격 리소스를 가져오도록 합니다.
  - 여태까지 legacy-peer-deps를 선택했었는데 이번엔 force를 선택해보자
  - 아무 변화가 없다

```
npm install react@latest react-dom@latest --force
```

## Warning

- 업데이트 후 바로 실행을 해보니 정상적으로 실행되지만 아래와 같은 경고메세지가 브라우저 콘솔창에 떳다

```
Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot
```

- React 18버전에 맞게 index.tsx파일 부분을 변경하라는 뜻

- 공식문서를 참고해서 변경해보자

```tsx
// Before
import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab="home" />, container);

// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
```

## type error

```
'null' is not assignable to type 'Element | DocumentFragment'
```

- https://stackoverflow.com/questions/71808102/react-18-type-null-is-not-assignable-to-type-element-documentfragment

- 브라우저 콘솔창에 뜨던 경고도 사라지고 잘 작동한다
