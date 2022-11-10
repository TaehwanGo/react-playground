type Student = {
  id: number;
  name: string;
};

const students: Student[] = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Tony' },
];

export const getStudents = async () => {
  return students;
};

export const getStudent = async (id: number) => {
  return students.find((student) => student.id === id);
};
