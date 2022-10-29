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

  setActive = (city: string) => {
    this.setState({ active: city });
  };

  getCityId = () => {
    return this.props.cities.find(({ name }) => name === this.state.active)?.id;
  };

  render() {
    const cityId = this.getCityId();
    return (
      <Container full>
        <Container maxWidth>
          <Header active={this.state.active} setActive={this.setActive} />
          {cityId ? (
            <WeatherForecast cityId={cityId} />
          ) : (
            <Container>Please select a city!</Container>
          )}
        </Container>
      </Container>
    );
  }
}
