import React from 'react';
import { Story, Meta } from '@storybook/react';

import MyButton  from './MyButton';
import {MyButtonType} from "./MyButton.types";


// Default export
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React-Wijeti/MyButton',
  component: MyButton,
  argTypes: {},
} as Meta<typeof MyButton>;

// Component templates
// https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<MyButtonType> = (args) => <MyButton {...args} />;


// Stories
// https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  btnType: "primary"
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  label: 'Primary Large',
  btnType: "primary",
  size: "lg"
};

export const Disabled = Template.bind({});
Disabled.args = {
  btnType: "primary",
  isDisabled: true,
  label: 'Disabled',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  btnType: "secondary"
};

export const Rounded = Template.bind({});
Rounded.args = {
  label: 'Rounded',
  btnType: "primary",
  rounded: "soft"
};
