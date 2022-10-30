import { render } from '@testing-library/react';
import WeatherCard from 'molecules/WeatherCard';
import { DayForecast } from 'src/components/services/query/helpers/types';
import forecast from 'src/tests/toydata/forecast.json';

describe('WeatherCard', () => {
  it('should render', () => {
    const { container } = render(<WeatherCard forecast={forecast as DayForecast} />);

    expect(container).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const { container } = render(<WeatherCard forecast={forecast as DayForecast} />);

    expect(container).toMatchSnapshot();
  });
});
