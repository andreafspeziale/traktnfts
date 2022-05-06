import { Story, Meta } from '@storybook/react';
import { MintSection, MintSectionProps } from './MintSection';

export default {
  component: MintSection,
  title: 'MintSection',
} as Meta;

const Template: Story<MintSectionProps> = (args) => <MintSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  _public: {
    start: '2022-05-02T19:36:28Z',
    end: '2022-05-05T19:36:28Z',
  },
  _private: {
    start: '2022-05-02T19:36:28Z',
    end: '2022-05-05T19:36:28Z',
  },
};
