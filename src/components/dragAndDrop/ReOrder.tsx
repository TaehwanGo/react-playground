import React from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { students } from '@/data/dataForDnd';
import Container from '../atoms/Container';
import Item from '../atoms/Item';

const ReOrder = () => {
  const [studentList, setStudentList] = React.useState(students);

  const onDragEnd = (result: DropResult) => {
    console.log(result);
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    const newStudentList = Array.from(studentList); // copy
    const [removed] = newStudentList.splice(source.index, 1); // remove
    newStudentList.splice(destination.index, 0, removed); // insert
    setStudentList(newStudentList);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="studentsList">
        {(provided, droppableSnapshot) => (
          <Container
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={droppableSnapshot.isDraggingOver}
          >
            {studentList.map((student, index) => (
              <Draggable key={student.id} draggableId={student.id} index={index}>
                {(provided2, snapshot) => (
                  <Item
                    ref={provided2.innerRef}
                    {...provided2.draggableProps}
                    {...provided2.dragHandleProps}
                    isDragging={snapshot.isDragging}
                  >
                    {student.name}
                  </Item>
                )}
              </Draggable>
            ))}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ReOrder;
