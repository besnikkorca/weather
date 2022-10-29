import { ComponentMeta, ComponentStory } from '@storybook/react';
import Text from 'atoms/Text';
import { TextSize } from 'src/components/atoms/Text/types';

export default {
  title: 'Atoms/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Hello world',
};

export const XLarge = Template.bind({});
XLarge.args = {
  children: 'Hello world',
  size: TextSize.xLarge,
};

export const Large = Template.bind({});
Large.args = {
  children: 'Hello world',
  size: TextSize.large,
};

export const Normal = Template.bind({});
Normal.args = {
  children: 'Hello world',
  size: TextSize.normal,
};

export const Small = Template.bind({});
Small.args = {
  children: 'Hello world',
  size: TextSize.small,
};
