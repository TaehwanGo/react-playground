import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { Task } from '@/data/dataForDnd';
import { colorPalette } from '@/styles/colorPalette';

interface ContainerProps {
  isDragging: boolean;
}
const Container = styled.div<ContainerProps>`
  border: 1px solid white;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? 'lightgreen' : colorPalette.background)};
`;

interface TaskProps {
  task: Task;
  index: number;
}
const TaskComponent = ({ task, index }: TaskProps) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {task.content}
        </Container>
      )}
    </Draggable>
  );
};

export default TaskComponent;
