import { Story, Meta } from '@storybook/react';
import { IconLink, IconLinkProps } from './IconLink';

export default {
  component: IconLink,
  title: 'IconLink',
} as Meta;

const Template: Story<IconLinkProps> = (args) => <IconLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  date: '2022-05-02T19:36:28Z',
};
