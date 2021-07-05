import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectButton from '../components/IndexSelection/SelectButton/SelectButton';

export default {
  title: 'SelectButton',
  component: SelectButton
} as ComponentMeta<typeof SelectButton>;

const Template: ComponentStory<typeof SelectButton> = (args) => <SelectButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'infected',
  active: false
}

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  name: 'infected',
  active: true
};

