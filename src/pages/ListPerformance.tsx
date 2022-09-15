import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

interface Item {
  id: string;
  text: string;
}

interface ListObject {
  [key: string]: Item;
}

const ListPerformance = () => {
  /**
   * Array 방식의 렌더링 vs. Object 방식의 렌더링
   * 삭제에 걸리는 시간 비교
   */
  const [list, setList] = useState<Item[]>([]);
  const [listObject, setListObject] = useState<ListObject>();
  useEffect(() => {
    const tempList = [];
    for (let i = 0; i < 1000; i++) {
      tempList.push({
        id: `id-${i}`,
        text: `item ${i}`,
      });
    }
    setList(tempList);
    setListObject(
      tempList.reduce((acc, cur) => {
        acc[cur.id] = cur;
        return acc;
      }, {} as ListObject),
    );
  }, []);
  const handleDeleteInArray = useCallback(
    (id: string) => {
      console.time('handleDeleteInArray');
      setList(list.filter((item) => item.id !== id));
      console.timeEnd('handleDeleteInArray');
    },
    [list],
  );
  const handleDeleteInObject = useCallback(
    (id: string) => {
      console.time('handleDeleteInObject');
      const tempList = { ...listObject };
      delete tempList[id];
      setListObject(tempList);
      console.timeEnd('handleDeleteInObject');
    },
    [listObject],
  );
  const handleUpdateInArray = useCallback(
    (id: string) => {
      console.time('handleUpdateInArray');
      setList(
        list.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              text: 'updated',
            };
          }
          return item;
        }),
      );
      console.timeEnd('handleUpdateInArray');
    },
    [list],
  );
  const handleUpdateInObject = useCallback(
    (id: string) => {
      console.time('handleUpdateInObject');
      const tempList = { ...listObject };
      tempList[id] = {
        ...tempList[id],
        text: 'updated',
      };
      setListObject(tempList);
      console.timeEnd('handleUpdateInObject');
    },
    [listObject],
  );
  return (
    <Container>
      <div>
        <h1>Array 방식의 렌더링 성능 테스트</h1>
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <button type="button" onClick={() => handleUpdateInArray(item.id)}>
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Object 방식의 렌더링 성능 테스트</h1>
        <ul>
          {listObject &&
            Object.values(listObject).map((item) => (
              <li key={item.id}>
                <button type="button" onClick={() => handleUpdateInObject(item.id)}>
                  {item.text}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </Container>
  );
};

export default ListPerformance;
