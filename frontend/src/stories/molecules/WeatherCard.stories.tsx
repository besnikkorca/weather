import { ComponentMeta, ComponentStory } from '@storybook/react';
import WeatherCard from 'molecules/WeatherCard';
import { DayForecast } from 'src/components/services/query/helpers/types';
import forecast from 'src/tests/toydata/forecast.json';

export default {
  title: 'Molecules/WeatherCard',
  component: WeatherCard,
} as ComponentMeta<typeof WeatherCard>;

const Template: ComponentStory<typeof WeatherCard> = (args) => <WeatherCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  forecast: forecast as DayForecast,
};
