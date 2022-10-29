import { render } from '@testing-library/react';
import WeatherList from 'molecules/WeatherList';

describe('WeatherList', () => {
  it('should render', () => {
    const { container } = render(<WeatherList />);

    expect(container).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const view = render(<WeatherList />);

    expect(view).toMatchSnapshot();
  });
});
