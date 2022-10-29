import { render } from '@testing-library/react';
import WeatherAppTemplate from 'templates/WeatherAppTemplate';

const cities = [
  {
    id: 1,
    name: 'Ottawa',
  },
  {
    id: 2,
    name: 'Moscow',
  },
];

describe('WeatherAppTemplate', () => {
  it('should render', () => {
    const { container } = render(<WeatherAppTemplate cities={cities} />);

    expect(container).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const view = render(<WeatherAppTemplate cities={cities} />);

    expect(view).toMatchSnapshot();
  });

  it('renders correctly with no cities', () => {
    const view = render(<WeatherAppTemplate cities={[]} />);

    expect(view).toMatchSnapshot();
  });

  it('renders correctly with one city', () => {
    const view = render(<WeatherAppTemplate cities={[cities[0]]} />);

    expect(view).toMatchSnapshot();
  });
});
