import { ComponentMeta, ComponentStory } from '@storybook/react';
import QueryClientProvider from 'services/query/QueryClientProvider';
import getCityId from 'src/utils/getCityId/getCityId';
import WeatherAppTemplate from 'templates/WeatherAppTemplate';
import supportedCities from 'utils/supportedCities';

export default {
  title: 'Templates/WeatherAppTemplate',
  component: WeatherAppTemplate,
} as ComponentMeta<typeof WeatherAppTemplate>;

const Template: ComponentStory<typeof WeatherAppTemplate> = (args) => (
  <QueryClientProvider>
    <WeatherAppTemplate {...args} />
  </QueryClientProvider>
);

export const Default = Template.bind({});
Default.args = {
  cities: supportedCities,
};

export const WithNoCities = Template.bind({});
WithNoCities.args = {
  cities: [],
};

export const WithOneCity = Template.bind({});
WithOneCity.args = {
  cities: [supportedCities[0]],
};

export const OtherCities = Template.bind({});
OtherCities.args = {
  cities: [
    {
      name: 'London',
      id: getCityId('London', 'GB'),
    },
    {
      name: 'New York',
      id: getCityId('New York', 'US'),
    },
  ],
};
