import { render } from '@testing-library/react';
import WeatherList from 'molecules/WeatherList';
import { DayForecast } from 'src/components/services/query/helpers/types';
import forecastList from 'src/tests/toydata/forecastList.json';

describe('WeatherList', () => {
  it('should render', () => {
    const { container } = render(<WeatherList forecasts={forecastList as DayForecast[]} />);

    expect(container).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const view = render(<WeatherList forecasts={forecastList as DayForecast[]} />);

    expect(view).toMatchSnapshot();
  });
});
