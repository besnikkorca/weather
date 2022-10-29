import { Component } from 'react';
import WeatherCard from 'molecules/WeatherCard';
import WeatherList from 'molecules/WeatherList';
import WeatherForecast from 'organisms/WeatherForecast';
import Container from 'atoms/Container';
import Header from 'organisms/Header';
import { Props } from './types';

export default class WeatherAppTemplate extends Component<Props> {
  state = {
    active: 'Ottawa',
  };

  getCityId = (city: string) => {
    return this.props.cities.find(({ name }) => name === city)?.id;
  };

  setActive = (city: string) => {
    this.setState({ active: city });
  };

  render() {
    return (
      <Container full>
        <Container maxWidth>
          <Header active={this.state.active} setActive={this.setActive} />
          <WeatherForecast />
        </Container>
      </Container>
    );
  }
}
