import { Editor, Viewer } from '@toast-ui/react-editor';
import React, { LegacyRef, MutableRefObject, useEffect, useRef } from 'react';
import styled from 'styled-components';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

const Card = styled.div`
  background-color: lightgray;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 16px;
  padding: 16px;
  width: 300px;
  height: 200px;
`;

interface EditorProps {
  id: string;
  isEditorMode: boolean;
  handleClickComponent: (id: string) => void;
}
const EditCard = ({ id, isEditorMode, handleClickComponent }: EditorProps) => {
  const [html, setHtml] = React.useState<string>('a component');
  const editorRef = useRef<Editor>();

  const onChange = () => {
    const editorHtml = editorRef.current!.getInstance().getHTML();
    console.log(editorHtml);
    setHtml(editorHtml);
  };

  return (
    <Card onClick={() => handleClickComponent(id)}>
      {isEditorMode ? (
        <Editor
          ref={editorRef as React.LegacyRef<Editor>}
          initialValue={html}
          previewStyle="vertical"
          height="100%"
          initialEditType="wysiwyg"
          useCommandShortcut
          plugins={[colorSyntax]}
          toolbarItems={[['heading', 'bold']]}
          onChange={onChange}
          hideModeSwitch
        />
      ) : (
        <Viewer initialValue={html} />
      )}
    </Card>
  );
};

export default EditCard;
