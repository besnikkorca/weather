import { ComponentMeta, ComponentStory } from '@storybook/react';
import WeatherAppTemplate from 'templates/WeatherAppTemplate';

export default {
  title: 'Templates/WeatherAppTemplate',
  component: WeatherAppTemplate,
} as ComponentMeta<typeof WeatherAppTemplate>;

const Template: ComponentStory<typeof WeatherAppTemplate> = (args) => (
  <WeatherAppTemplate {...args} />
);

export const Default = Template.bind({});
Default.args = {
  cities: [
    {
      id: 1,
      name: 'Ottawa',
    },
    {
      id: 2,
      name: 'Moscow',
    },
  ],
};

export const WithNoCities = Template.bind({});
WithNoCities.args = {
  cities: [],
};

export const WithOneCity = Template.bind({});
WithOneCity.args = {
  cities: [
    {
      id: 1,
      name: 'Ottawa',
    },
  ],
};
