import { ComponentStory, ComponentMeta } from '@storybook/react';

import Spinner from '../components/UI/Spinner/Spinner';

export default {
  title: 'Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 16,
  width: "16px"
}


