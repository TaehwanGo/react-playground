import React from 'react';
import { ItemProps } from '@/pages/AddComponent';

const Item1 = ({ text }: ItemProps) => {
  return <li>{text}</li>;
};

export default Item1;
