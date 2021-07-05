import { ComponentStory, ComponentMeta } from '@storybook/react';

import SliderComponent from '../components/UI/Slider/SliderComponent';

export default {
  title: 'SliderComponent',
  component: SliderComponent,
} as ComponentMeta<typeof SliderComponent>;

const Template: ComponentStory<typeof SliderComponent> = (args) => <SliderComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  step: 14,
  sliderPosition: 0.5
}


