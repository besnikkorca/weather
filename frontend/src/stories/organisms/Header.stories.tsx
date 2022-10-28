import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from 'src/components/organisms/Header';

export default {
  title: 'Organisms/Header',
  component: Header,
  active: {
    control: { type: 'select' },
    options: ['Ottawa', 'Moscow', 'Tokyo'],
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  active: 'Ottawa',
  setActive: () => {},
};

export const Moscow = Template.bind({});
Moscow.args = {
  active: 'Moscow',
  setActive: () => {},
};

export const Tokyo = Template.bind({});
Tokyo.args = {
  active: 'Tokyo',
  setActive: () => {},
};
