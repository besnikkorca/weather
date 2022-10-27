import { render, screen } from '@testing-library/react';
import UseCityWeather from 'src/components/services/query/helpers/UseCityWeather';
import QueryClientProvider from 'src/components/services/query/QueryClientProvider';

describe('UseCityWeather', () => {
  it('should render successfully', async () => {
    const spy = jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue({ city: { name: 'Moscow' } }),
    } as any);

    const { baseElement } = render(
      <QueryClientProvider>
        <UseCityWeather cityId={123}>{(query) => <h1>{query.data?.city.name}</h1>}</UseCityWeather>
      </QueryClientProvider>
    );

    const name = await screen.findByText('Moscow');

    expect(name).toBeInTheDocument();
    expect(baseElement).toBeTruthy();
    expect(spy).toHaveBeenCalled();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
