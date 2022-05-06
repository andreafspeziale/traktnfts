import { Story, Meta } from '@storybook/react';
import { Date, DateProps } from './Date';

export default {
  component: Date,
  title: 'Date',
} as Meta;

const Template: Story<DateProps> = (args) => <Date {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  date: '2022-05-02T19:36:28Z',
};
