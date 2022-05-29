# file download 구현

- 참고
  - https://mygumi.tistory.com/392
  - https://www.notion.so/segom/axios-59210fc2f5cb47979fc632b3eb59f34e
  - https://velog.io/@kados22/react-s3-%ED%8C%8C%EC%9D%BC-%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-%EB%B2%84%ED%8A%BC-%EA%B5%AC%ED%98%84
  - https://velog.io/@haesoohaesoo/React-CRA-public

- axios 를 이용한 파일 다운로드
  - file download 상태를 detect 하고자 할 때 활용 가능

```ts
function async download() {
    const response = await axios({
      url: 'http://localhost:9000/public/files/data.zip',
      method: 'GET',
      responseType: 'blob'
    })

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'my-data.zip');
    document.body.appendChild(link);
    link.click();
}
```

axios 를 사용해서 data 를 얻은 이 후 임의의 blob url 을 만들어서 얻은 결과를 download 하는 방식(?)