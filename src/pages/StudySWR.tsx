import React, { useCallback, useEffect, useState } from 'react';
import getStudy from '@/service/study';

const StudySWR = () => {
  const [studyList, setStudyList] = useState([]);
  const [name, setName] = useState('');

  const fetchStudy = useCallback(async () => {
    try {
      const result = await getStudy();
      setStudyList(result.data);
    } catch (error) {
      console.error(error);
    }
  }, []);
  useEffect(() => {
    fetchStudy();
  }, [fetchStudy]);
  return (
    <>
      <div>StudySWR</div>
      <div>{studyList}</div>
    </>
  );
};

export default StudySWR;
