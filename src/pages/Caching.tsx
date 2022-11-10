import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getStudents } from '@/data/tempApi';

const Caching = () => {
  // use react query
  const { data, isLoading } = useQuery(['students'], getStudents);

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  return (
    <div>
      <h1>Student List</h1>
      {data ? (
        <ul>
          {data.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Caching;
