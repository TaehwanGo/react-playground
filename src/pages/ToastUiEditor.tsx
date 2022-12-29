import React from 'react';
import styled from 'styled-components';
import CommonLayout from '@/components/layouts/CommonLayout';
import EditCard from '@/components/molecules/EditCard';

const CustomCommonLayout = styled(CommonLayout)`
  background-color: #fff;
  color: #000;
`;

const ToastUiEditor = () => {
  const [focusedComponentId, setFocusedComponentId] = React.useState<string>('');
  const handleClickComponent = (id: string) => {
    setFocusedComponentId(id);
  };

  // const handleClickBackground = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

  return (
    // CustomCommonLayout click event가 정확히 일치하는 경우에만 발생한다
    <CustomCommonLayout
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
          setFocusedComponentId('');
        }
      }}
    >
      <EditCard
        id="card-1"
        isEditorMode={focusedComponentId === 'card-1'}
        handleClickComponent={handleClickComponent}
      />
      <EditCard
        id="card-2"
        isEditorMode={focusedComponentId === 'card-2'}
        handleClickComponent={handleClickComponent}
      />
    </CustomCommonLayout>
  );
};

export default ToastUiEditor;
