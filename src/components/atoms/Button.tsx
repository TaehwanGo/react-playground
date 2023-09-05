import React, { useEffect } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export default function Button(props: ButtonProps) {
  const { children, ...others } = props;
  // eslint-disable-next-line react/button-has-type
  return <button {...others}>{children}</button>;
}
