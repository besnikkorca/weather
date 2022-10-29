import { ComponentMeta, ComponentStory } from '@storybook/react';
import WeatherForecast from 'organisms/WeatherForecast';

export default {
  title: 'Organisms/WeatherForecast',
  component: WeatherForecast,
} as ComponentMeta<typeof WeatherForecast>;

const Template: ComponentStory<typeof WeatherForecast> = (args) => <WeatherForecast {...args} />;

export const Default = Template.bind({});
Default.args = {};
