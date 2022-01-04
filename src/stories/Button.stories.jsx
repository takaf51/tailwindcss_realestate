import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'This is a button',
};

Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/1qYOl59kVzgYnXWJQ6O2vS/Untitled?node-id=102%3A4'
  },
  zeplinLink: "zpl://components?pid=61d363112967ca1219584135&coid=61d363128530641107dd2df9"
}
