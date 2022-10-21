# 음성인식

- 최근 음성 인식 후 정답인지 아닌지 확인해야 하는 앱을 만들어야 해서 테스트를 해보려한다
- 가장 많이 검색결과로 뜨고 적당히 다운로드 수도 많은 react-speech-recognition 라이브러리를 사용하자
- https://www.npmjs.com/package/react-speech-recognition

## Web Speech API

- https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API
- can i use? => https://caniuse.com/?search=SpeechRecognition
  - FireFox를 제외하고 크로미움 기반 브라우저는 다 사용 가능하다
- https://javascript.plainenglish.io/how-to-implement-speech-to-text-quickly-and-easily-in-javascript-d9804ddd2a49
- https://codepen.io/kyledeguzman/pen/KKZEKrL
  - 영어는 잘 인식 된다
  - 사용한도에 제한이 있는 것 같다 => https://merrily-code.tistory.com/61

## react-speech-recognition

- https://www.npmjs.com/package/react-speech-recognition
- @type/react-speech-recognition 를 다운 받으면 타입스크립트에서도 사용가능하다
  - 그러나 이것도 내부적으로 Web speech API를 사용하기 때문에 사용한도에 제한이 있다

```
npm i react-speech-recognition @types/react-speech-recognition --force
```

## Production

### AWS

- https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-transcribe-streaming/index.html

### Google

- https://cloud.google.com/speech-to-text/docs/samples
- https://blog.softwaremill.com/how-to-use-googles-speech-to-text-in-a-web-application-working-example-a4b64c61f133
