import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from 'molecules/Header';

export default {
  title: 'Molecules/Header',
  component: Header,
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
