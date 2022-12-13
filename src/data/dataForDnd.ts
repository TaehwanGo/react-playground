export const students = [
  {
    id: '1',
    name: 'Tony',
  },
  {
    id: '2',
    name: 'Eloe',
  },
  {
    id: '3',
    name: 'Yerin',
  },
];

export const students2 = [
  {
    id: '1',
    name: 'Jenny',
  },
  {
    id: '2',
    name: 'John',
  },
  {
    id: '3',
    name: 'Tom',
  },
];

export const studentsList = {
  students,
  students2,
};

export type Task = {
  id: string;
  content: string;
};

export type Column = {
  id: string;
  title: string;
  taskIds: string[];
};

export type InitialData = {
  tasks: Task[];
  columns: Column[];
  columnOrder: string[];
};

export const initialData: InitialData = {
  tasks: [
    { id: 'task-1', content: 'Take out the garbage' },
    { id: 'task-2', content: 'Watch my favorite show' },
    { id: 'task-3', content: 'Charge my phone' },
    { id: 'task-4', content: 'Cook dinner' },
  ],
  columns: [
    {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    {
      id: 'column-2',
      title: 'In progress',
      taskIds: [],
    },
    {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    },
  ],
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3'],
};
