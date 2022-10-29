import { render } from '@testing-library/react';
import WeatherForecast from 'organisms/WeatherForecast';

describe('WeatherForecast', () => {
  it('should render', () => {
    const view = render(<WeatherForecast />);

    expect(view).toMatchSnapshot();
  });
});
