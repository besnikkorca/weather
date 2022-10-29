import { ComponentMeta, ComponentStory } from '@storybook/react';
import Icon from 'atoms/Icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'cloud',
  size: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
  name: 'cloud-rain',
  size: 'medium',
};

export const Normal = Template.bind({});
Normal.args = {
  name: 'cloud-sun',
  size: 'normal',
};
