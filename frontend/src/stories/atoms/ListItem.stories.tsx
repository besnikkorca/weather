import { ComponentMeta, ComponentStory } from '@storybook/react';
import ListItem from 'atoms/ListItem';

export default {
  title: 'Atoms/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Hello world',
};

export const Active = Template.bind({});
Active.args = {
  children: 'Hello world',
  active: true,
};

export const NotActive = Template.bind({});
NotActive.args = {
  children: 'Hello world',
  active: false,
};

export const WithOnClick = Template.bind({});
WithOnClick.args = {
  children: 'Hello world',
  onClick: () => alert('clicked'),
};
