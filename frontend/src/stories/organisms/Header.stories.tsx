import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from 'src/components/organisms/Header';
import citiesList from 'src/tests/toydata/citiesList';

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
  cities: citiesList,
};

export const Moscow = Template.bind({});
Moscow.args = {
  active: 'Moscow',
  setActive: () => {},
  cities: citiesList,
};

export const Tokyo = Template.bind({});
Tokyo.args = {
  active: 'Tokyo',
  setActive: () => {},
  cities: citiesList,
};
