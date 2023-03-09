import React, { useEffect, useState } from 'react';

interface MenuProps {
  visible: boolean;
  x: number;
  y: number;
}
const Menu = ({ visible, x, y }: MenuProps) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: y,
        left: x,
        display: visible ? 'block' : 'none',
      }}
    >
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
        <li>메뉴3</li>
      </ul>
    </div>
  );
};

const useContextMenu = () => {
  const [state, setState] = useState({ visible: false, x: 0, y: 0 });

  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    setState({ visible: true, x: event.clientX, y: event.clientY });
  };

  const handleClick = () => {
    setState({ visible: false, x: 0, y: 0 });
  };

  useEffect(() => {
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return { state, handleContextMenu, Menu };
};

export default useContextMenu;
