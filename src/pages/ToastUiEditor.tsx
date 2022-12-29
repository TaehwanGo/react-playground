import React from 'react';
import { Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import CommonLayout from '@/components/layouts/CommonLayout';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

const CustomCommonLayout = styled(CommonLayout)`
  background-color: #fff;
  color: #000;

  .toastui-editor-contents h1 {
    border-bottom: none;
    padding-bottom: 0;
  }

  .toastui-editor-contents h2 {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const ToastUiEditor = () => {
  return (
    <CustomCommonLayout>
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut
        plugins={[colorSyntax]}
        toolbarItems={[['heading', 'bold']]}
      />
    </CustomCommonLayout>
  );
};

export default ToastUiEditor;
