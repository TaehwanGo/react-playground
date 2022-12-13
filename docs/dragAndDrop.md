# Drag and drop

- 사용 라이브러리

  - react-beautiful-dnd

- 참고

  - https://egghead.io/courses/beautiful-and-accessible-drag-and-drop-with-react-beautiful-dnd
  - https://velog.io/@deli-ght/react-beautiful-dnd-%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95

- 컬럼 상태 데이터 구조 예시

```ts
const newColumn = {
  id: 'column-1',
  title: 'To do',
  taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
};

const newState = {
  ...state,
  columns: {
    ...state.columns,
    [newColumn.id]: newColumn,
  },
};
```

## callbacks

- dragStart, dragUpdate도 있지만 보통은 UI업데이트엔 dragEnd를 주로 사용

## dragHandle

- props에 {...provided2.dragHandleProps} 추가

## 이슈

- https://github.com/atlassian/react-beautiful-dnd/issues/2407
- react-strict-mode를 사용할 수 없음
