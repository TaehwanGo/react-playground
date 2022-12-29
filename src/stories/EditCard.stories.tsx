import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import EditCard from '../components/molecules/EditCard';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

export default {
  title: 'Molecules/EditCard',
  component: EditCard,
} as ComponentMeta<typeof EditCard>;

const Template: ComponentStory<typeof EditCard> = (args) => <EditCard {...args} />;

export const ViewMode = Template.bind({});
ViewMode.args = {
  id: 'card-1',
  isEditorMode: false,
  handleClickComponent: () => {},
};

export const EditorMode = Template.bind({});
EditorMode.args = {
  id: 'card-1',
  isEditorMode: true,
  handleClickComponent: () => {},
};
