import React from 'react';
import { Link } from 'react-router-dom';
import useNameStore from '@/store/useNameStore';
import { useCountStore } from './StudyZustand';

function About() {
  const { name } = useNameStore();
  const { count } = useCountStore();
  return (
    <>
      <h1>about</h1>
      <div>count : {count}</div>
      <div>name : {name}</div>
      <Link to="/">go home</Link>
      <Link to="/study/zustand">/study/zustand</Link>
    </>
  );
}

export default About;
