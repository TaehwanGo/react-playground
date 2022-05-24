import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useNameStore from '@/store/useNameStore';
import useCountStore from '@/store/useCountStore';

function About() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { name, setName } = useNameStore();
  const { count } = useCountStore();
  return (
    <>
      <h1>about</h1>
      <div>count : {count}</div>
      <div>name : {name}</div>
      <form onSubmit={(e) => {
        e.preventDefault();
        setName(inputRef.current!.value);
      }}
      >
        <input ref={inputRef} type="text" placeholder="please input your name" />
      </form>
      <Link to="/">go home</Link>
      <Link to="/study/zustand">/study/zustand</Link>
    </>
  );
}

export default About;
