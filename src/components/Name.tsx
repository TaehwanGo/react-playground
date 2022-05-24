import React from 'react';
import { Link } from 'react-router-dom';
import useNameStore from '@/store/useNameStore';

const Name = () => {
  const { name, setName } = useNameStore();
  const inputTextRef = React.useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(inputTextRef.current!.value);
  };
  return (
    <div>
      <h4>input name</h4>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputTextRef}
          type="text"
          placeholder="please input your name"
        />
      </form>
      <div>
        <h4>name: {name}</h4>
      </div>
      <Link to="/about">go to about</Link>
    </div>
  );
};

export default Name;
