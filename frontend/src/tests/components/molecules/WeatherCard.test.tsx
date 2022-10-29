import { render } from '@testing-library/react';
import WeatherCard from 'molecules/WeatherCard';

describe('WeatherCard', () => {
  it('renders correctly', () => {
    const { container } = render(<WeatherCard />);

    expect(container).toMatchSnapshot();
  });
});
