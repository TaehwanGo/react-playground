# Craco

- Create React App Configuration Override 의 약자

- CRA에서 웹팩설정을 할 수 있게 함

- 참고

  - https://velog.io/@welloff_jj/Applying-Absolute-Path-with-Craco-to-React-Project-made-with-CRA

- Next.js에선 tsconfig에 alias paths를 설정해도 적용이 되었지만 CRA에선 eject를 해줘야 한다고 한다
  - eject를 하고 싶진 않다면 craco는 좋은 선택이 될 것

`npm i @craco/craco --legacy-peer-deps`

- craco에서 react-script는 4버전대 인데 지금 설치된 것이 5버전대라서 --legacy-peer-deps 옵션을 추가하였다

`npm i -D craco-alias`

craco.config.js 작성하기

```js
const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.json',
      },
    },
  ],
};
```
