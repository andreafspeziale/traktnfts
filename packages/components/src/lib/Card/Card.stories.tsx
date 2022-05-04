import { Story, Meta } from '@storybook/react';
import { Card, CardProps } from './Card';

export default {
  component: Card,
  title: 'Card',
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  cover:
    'https://cdn.sanity.io/images/o1zupo6m/production/5e095c909927173cb167fbe22dd48474dc00d6e3-1900x1080.png?w=634',
  icon: 'https://cdn.sanity.io/images/o1zupo6m/production/187474641f87fce6192c47985dc62b110a003d04-400x400.jpg?w=150',
  discord: 'https://discord.gg/dippies',
  opensea: 'https://opensea.io/collection/dippies',
  twitter: 'https://twitter.com/dippiesnft',
  website: 'https://www.dippies.io',
  minted: true,
  name: 'Dippies',
};
