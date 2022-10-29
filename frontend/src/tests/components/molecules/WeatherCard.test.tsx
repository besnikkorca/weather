import { render } from '@testing-library/react';
import WeatherCard from 'molecules/WeatherCard';
import WeatherList from 'src/components/molecules/WeatherList';

describe('WeatherCard', () => {
  it('should render', () => {
    const { container } = render(<WeatherList />);

    expect(container).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const { container } = render(<WeatherCard />);

    expect(container).toMatchSnapshot();
  });
});
