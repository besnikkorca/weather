import { ComponentMeta, ComponentStory } from '@storybook/react';
import WeatherList from 'src/components/molecules/WeatherList';
import { DayForecast } from 'src/components/services/query/helpers/types';
import forecastList from 'src/tests/toydata/forecastList.json';

export default {
  title: 'Molecules/WeatherList',
  component: WeatherList,
} as ComponentMeta<typeof WeatherList>;

const Template: ComponentStory<typeof WeatherList> = (args) => <WeatherList {...args} />;

export const Default = Template.bind({});
Default.args = { forecasts: forecastList as DayForecast[] };
