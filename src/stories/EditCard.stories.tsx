import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EditCard from '@/components/molecules/EditCard';

// import EditCard from '../components/molecules/EditCard';

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
