import { ComponentMeta, ComponentStory } from '@storybook/react';
import WeatherForecast from 'organisms/WeatherForecast';
import QueryClientProvider from 'services/query/QueryClientProvider';

export default {
  title: 'Organisms/WeatherForecast',
  component: WeatherForecast,
} as ComponentMeta<typeof WeatherForecast>;

const Template: ComponentStory<typeof WeatherForecast> = (args) => (
  <QueryClientProvider>
    <WeatherForecast {...args} />
  </QueryClientProvider>
);

export const Default = Template.bind({});
Default.args = {
  cityId: 56335,
};
