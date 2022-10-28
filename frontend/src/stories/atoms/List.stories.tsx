import { ComponentMeta, ComponentStory } from '@storybook/react';
import List from 'atoms/List';

export default {
  title: 'Atoms/List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (props) => <List {...props} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Hello world',
};

export const WithItems = Template.bind({});
WithItems.args = {
  children: [<li>Item 1</li>, <li>Item 2</li>, <li>Item 3</li>],
};
