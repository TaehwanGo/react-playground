import React, { useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { initialData, InitialData, Task } from '@/data/dataForDnd';
import ColumnComponent from './Column';

const Container = styled.div`
  display: flex;
`;

const MovingItemBetweenColumns = () => {
  const [state, setState] = useState<InitialData>(initialData);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    console.log('destination', destination);
    console.log('source', source);

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    // start column에서 task를 삭제하고 finish column에 task를 추가한다.

    const startColumn = state.columns.find((column) => column.id === source.droppableId);
    const finishColumn = state.columns.find((column) => column.id === destination.droppableId);
    if (!startColumn || !finishColumn) {
      return;
    }
    if (startColumn === finishColumn) {
      console.log('같은 컬럼 내 에서 이동');
      // 같으면 순서만 바꿈
      const newTaskIds = startColumn.taskIds;
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      const newColumns = [...state.columns].map((column) => {
        if (column.id === newColumn.id) {
          return newColumn;
        }
        return column;
      });

      const newState = {
        ...state,
        columns: newColumns,
      };

      setState(newState);
      return;
    }

    // Moving from one list to another
    console.log('다른 컬럼으로 이동');

    const newStartColumn = {
      ...startColumn,
      taskIds: startColumn?.taskIds.filter((id) => id !== draggableId),
    };

    const newFinishColumnTaskIds = [...finishColumn.taskIds];
    newFinishColumnTaskIds.splice(destination.index, 0, draggableId);

    console.log('newFinishColumnTaskIds', newFinishColumnTaskIds);

    const newFinishColumn = {
      ...finishColumn,
      taskIds: newFinishColumnTaskIds,
    };

    const newState: InitialData = {
      ...state,
      columns: [
        ...state.columns.map((_column) => {
          if (_column.id === newStartColumn.id) {
            return newStartColumn;
          }
          if (_column.id === newFinishColumn.id) {
            console.log('_column.id === newFinishColumn.id', _column.id === newFinishColumn.id);
            return newFinishColumn;
          }
          return _column;
        }),
      ],
    };
    setState(newState);
  };

  useEffect(() => {
    console.log('state', state);
  }, [state]);

  const findTask = (id: string) => state.tasks.find((task) => task.id === id);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {state.columnOrder.map((columnId) => {
          const column = state.columns.find((columnData) => columnData.id === columnId);
          const tasks = column?.taskIds.map(findTask);
          return (
            column && tasks && <ColumnComponent key={column.id} column={column} tasks={tasks} />
          );
        })}
      </Container>
    </DragDropContext>
  );
};

export default MovingItemBetweenColumns;
