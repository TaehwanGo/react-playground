import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// 컴포넌트 단위
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// 해당 컴포넌트의 주요 상태 스냅샷1
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

// 해당 컴포넌트의 주요 상태 스냅샷2
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

// 해당 컴포넌트의 주요 상태 스냅샷3
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

// 해당 컴포넌트의 주요 상태 스냅샷4
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
