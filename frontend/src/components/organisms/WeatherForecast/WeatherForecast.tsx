import { Component } from 'react';
import Container from 'atoms/Container';
import WeatherCard from 'molecules/WeatherCard';
import WeatherList from 'molecules/WeatherList';
import UseCityWeather from 'services/query/helpers/UseCityWeather';
import { Props } from './types';
import { DayForecast } from 'src/components/services/query/helpers/types';

export default class WeatherForecast extends Component<Props> {
  getTodayForecast = (dayForecasts: DayForecast[] | undefined) => {
    if (!dayForecasts) {
      return undefined;
    }
    return dayForecasts[0];
  };

  getUpcomingDaysForecast = (dayForecasts: DayForecast[] | undefined) => {
    if (!dayForecasts) {
      return undefined;
    }

    // get one forecast per day excluding today
    return dayForecasts.filter(
      (_, index) =>
        // since the forecast are in 3 hour intervals that makes a total of 8 per day
        // we skip index 0 since we don't want weather forecast for today
        // and take all the ones that are divisible by 8 which would mean
        // we're taking the first forecast for every other day excluding today
        index !== 0 && index % 8 === 0
    );
  };

  render() {
    const { cityId } = this.props;
    return (
      <UseCityWeather cityId={cityId}>
        {(query) => {
          return (
            <Container flexColumn border style={{ padding: 0 }} borderRadius shadow>
              <WeatherCard forecast={this.getTodayForecast(query.data?.list)} />
              <WeatherList forecasts={this.getUpcomingDaysForecast(query.data?.list) || []} />
            </Container>
          );
        }}
      </UseCityWeather>
    );
  }
}
