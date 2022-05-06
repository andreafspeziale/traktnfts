import { Story, Meta } from '@storybook/react';
import { Mint, MintProps } from './Mint';

export default {
  component: Mint,
  title: 'Mint',
} as Meta;

const Template: Story<MintProps> = (args) => <Mint {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Private Mint',
  start: '2022-05-02T19:36:28Z',
  end: '2022-05-05T19:36:28Z',
};
