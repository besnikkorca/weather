import { Component, ReactNode } from 'react';
import WeatherAppTemplate from 'src/components/templates/WeatherAppTemplate';
import supportedCities from 'src/utils/supportedCities';

export default class WeatherPage extends Component<{}, { active: string }> {
  render(): ReactNode {
    return <WeatherAppTemplate cities={supportedCities} />;
  }
}
