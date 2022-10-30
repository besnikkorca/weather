import { ComponentMeta, ComponentStory } from '@storybook/react';
import CitiesList from 'molecules/CitiesList';
import citiesList from 'src/tests/toydata/citiesList';

export default {
  title: 'Molecules/CitiesList',
  component: CitiesList,
  argTypes: {
    active: {
      control: { type: 'select' },
      options: ['Ottawa', 'Moscow', 'Tokyo'],
    },
  },
} as ComponentMeta<typeof CitiesList>;

const Template: ComponentStory<typeof CitiesList> = (args) => <CitiesList {...args} />;

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

export const WithOnClick = Template.bind({});
WithOnClick.args = {
  active: 'Ottawa',
  setActive: () => alert('clicked'),
  cities: citiesList,
};
