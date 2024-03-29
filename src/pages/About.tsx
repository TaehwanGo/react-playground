import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useNameStore from '@/store/useNameStore';
import useCountStore from '@/store/useCountStore';
import withLogging from '@/util/wrapLogging';
import Button from '@/components/atoms/Button';
import wrapAlert from '@/util/wrapAlert';

const ButtonWithLogging = withLogging(Button);

function About() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { name, setName } = useNameStore();
  const { count } = useCountStore();
  const occurError = () => {
    throw new Error('error');
  };
  const handleClickButton = wrapAlert(occurError);
  return (
    <>
      <h1>about</h1>
      <div>count : {count}</div>
      <div>name : {name}</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setName(inputRef.current!.value);
        }}
      >
        <input ref={inputRef} type="text" placeholder="please input your name" />
      </form>
      <Link to="/">go home</Link>
      <Link to="/study/zustand">/study/zustand</Link>
      <div>
        <ButtonWithLogging onClick={handleClickButton}>buttonWithLogging</ButtonWithLogging>
      </div>
    </>
  );
}

export default About;
