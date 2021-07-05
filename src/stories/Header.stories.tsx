
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Heading from '../components/Heading/Heading';

export default {
  title: 'Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const MainHeading = Template.bind({});
MainHeading.args = {};

