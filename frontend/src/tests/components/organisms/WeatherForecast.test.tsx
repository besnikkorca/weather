import { render } from '@testing-library/react';
import WeatherForecast from 'organisms/WeatherForecast';
import mockUseQuery from '../services/query/mockUseQuery';

describe('WeatherForecast', () => {
  beforeEach(() => {
    mockUseQuery((key, fn, options) => ({
      data: [],
      isLoading: false,
      isError: false,
    }));
  });

  it('should render', () => {
    const { container } = render(<WeatherForecast cityId={1} />);

    expect(container).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const view = render(<WeatherForecast cityId={1} />);

    expect(view).toMatchSnapshot();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
