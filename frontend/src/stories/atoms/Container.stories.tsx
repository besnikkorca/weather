import Container from 'atoms/Container';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BG } from 'src/components/atoms/Container/types';

export default {
  title: 'Atoms/Container',
  component: Container,
  argTypes: {
    full: { name: 'Is full screen' },
    bg: {
      name: 'Background',
      defaultValue: BG.main,
      control: { type: 'select' },
      options: Object.keys(BG),
    },
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Full = Template.bind({});
Full.args = { full: true, children: 'Hello world' };

export const Normal = Template.bind({});
Normal.args = { full: false, children: 'Hello world' };
