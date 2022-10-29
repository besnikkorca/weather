import { Component } from 'react';
import Container from 'atoms/Container';
import WeatherCard from 'molecules/WeatherCard';
import WeatherList from 'molecules/WeatherList';

export default class WeatherForecast extends Component {
  render() {
    return (
      <Container flexColumn border style={{ padding: 0 }} borderRadius shadow>
        <WeatherCard />
        <WeatherList />
      </Container>
    );
  }
}
