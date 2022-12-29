# Story book

- https://storybook.js.org/docs/react/get-started/install

## install

- `npx storybook init`

## 실행

- `npm run storybook`

## 스토리란

- 스토리는 UI 구성요소의 렌더링된 상태를 캡처합니다.

  - 상태 -> 달라진 UI

- 개발자는 구성 요소가 지원할 수 있는 모든 "흥미로운" 상태를 설명하는 구성 요소당 여러 스토리를 작성합니다.

- 각 예제 구성 요소에는 지원하는 상태를 보여주는 일련의 스토리가 있습니다.
- UI에서 스토리를 탐색하고 .stories.js 또는 .stories.ts로 끝나는 파일에서 스토리 뒤의 코드를 볼 수 있습니다.

## 스토리 파일 구성

```tsx
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
```

- `export default ComponentMeta<typeof 컴포넌트>`

  - 컴포넌트 메타 데이터
  - 해당 컴포넌트 공통 스토리 설정

- `const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;`

  - 컴포넌트 상태 지정을 위한 공통 템플릿

- `export const 컴포넌트_스냅샷_이름 = Template.bind({});`

```tsx
Primary.args = {
  primary: true,
  label: 'Button',
};
```

- 해당 컴포넌트의 주요 상태 스냅샷에 포함될 상태를 설정하는 부분