import React from 'react';
import useContextMenu from '@/hooks/useContextMenu';

const ContextMenu = () => {
  const { Menu, state } = useContextMenu();
  return (
    <div>
      <div>우클릭해보세요</div>
      <Menu visible={state.visible} x={state.x} y={state.y} />
    </div>
  );
};

export default ContextMenu;
