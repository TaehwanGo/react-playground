import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import TaskComponent from './Task';
import { Column, Task } from '@/data/dataForDnd';
import { colorPalette } from '@/styles/colorPalette';

const Container = styled.div`
  margin: 8px;
  border: 1px solid white;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;

interface TaskListProps {
  isDraggingOver: boolean;
}
const TaskList = styled.div<TaskListProps>`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggingOver ? 'skyblue' : colorPalette.background)};
  flex-grow: 1;
  min-height: 100px;
`;

interface ColumnProps {
  column: Column;
  tasks: (Task | undefined)[];
}

const ColumnComponent = ({ column, tasks }: ColumnProps) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map(
              (task, index) => task && <TaskComponent key={task.id} task={task} index={index} />,
            )}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default ColumnComponent;
