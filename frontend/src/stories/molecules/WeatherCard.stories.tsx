import { ComponentMeta, ComponentStory } from '@storybook/react';
import WeatherCard from 'molecules/WeatherCard';

export default {
  title: 'Molecules/WeatherCard',
  component: WeatherCard,
} as ComponentMeta<typeof WeatherCard>;

const Template: ComponentStory<typeof WeatherCard> = (args) => <WeatherCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
