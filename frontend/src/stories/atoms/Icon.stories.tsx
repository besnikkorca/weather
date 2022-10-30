import { ComponentMeta, ComponentStory } from '@storybook/react';
import Icon from 'atoms/Icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Clouds',
  size: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
  name: 'Rain',
  size: 'medium',
};

export const Normal = Template.bind({});
Normal.args = {
  name: 'Sun',
  size: 'normal',
};
