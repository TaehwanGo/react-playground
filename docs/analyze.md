# analyze

- Analyzing the Bundle Size

## CRA

- CRA로 만든 앱에서 번들 사이즈를 분석하는 방법

### 1. source-map-explorer

- https://create-react-app.dev/docs/analyzing-the-bundle-size/

```bash
npm install --save-dev source-map-explorer
```

```json
// package.json
  // ...
  "scripts": {
    "analyze": "source-map-explorer 'build/static/js/*.js'",
    // ...
  }
  // ...
```

```bash
npm run build
npm run analyze
```

- build 시 SOURCE MAP 파일이 생성되어야 함
  - 빌드할 때 GENERATE_SOURCEMAP=false 옵션을 사용한다면 SOURCE MAP 파일이 생성되지 않음
    - 해당 옵션을 사용하지 않고 빌드하는 스크립트를 추가하면 된다

### 2. cra-bundle-analyzer

- cra-bundle-analyzer

- alias를 사용하고 있다면, 잘 동작하지 않는다
  - `@/`로 시작하는 alias를 `src/`로 변경하고 확인해보니 잘 동작하는 것을 확인

```bash
npm install --save-dev cra-bundle-analyzer
npx cra-bundle-analyzer
```
