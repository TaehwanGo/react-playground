import React, { useState } from 'react';
import Item1 from '@/components/Item1';

export interface ItemProps {
  text: string;
}

const Item2 = ({ text }: ItemProps) => {
  return (
    <li>
      <span>{text}</span>
    </li>
  );
};

interface ItemData {
  id: number;
  text: string; // 수식
  type: 'math' | 'text';
}

const AddComponent = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [textList, setTextList] = useState<ItemData[]>([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const text = inputRef.current?.value;
    const id = textList.length + 1;
    const type = id % 2 === 0 ? 'math' : 'text';
    if (text) {
      setTextList([...textList, { id, text, type }]);
    }
  };

  return (
    <div>
      <h1>Add Component</h1>
      <div>
        {/* add components here */}
        {textList.map(({ id, text, type }) => {
          return type === 'math' ? <Item1 key={id} text={text} /> : <Item2 key={id} text={text} />;
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" ref={inputRef} />
      </form>
    </div>
  );
};

export default AddComponent;
