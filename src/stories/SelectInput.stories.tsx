import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectInput from '../components/UI/SelectInput/SelectInput';
import { ChartTypes } from '../constants/constants';

export default {
  title: 'SelectInput',
  component: SelectInput,
} as ComponentMeta<typeof SelectInput>;

const Template: ComponentStory<typeof SelectInput> = (args) => <SelectInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: 'biaxialLine',
    minWidth: 200, 
    options: ChartTypes,
    title: "Select chart type"
}


