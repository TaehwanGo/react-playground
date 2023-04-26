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
