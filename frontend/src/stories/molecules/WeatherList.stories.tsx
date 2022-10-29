import { ComponentMeta, ComponentStory } from '@storybook/react';
import WeatherList from 'src/components/molecules/WeatherList';

export default {
  title: 'Molecules/WeatherList',
  component: WeatherList,
} as ComponentMeta<typeof WeatherList>;

const Template: ComponentStory<typeof WeatherList> = (args) => <WeatherList {...args} />;

export const Default = Template.bind({});
Default.args = {};
