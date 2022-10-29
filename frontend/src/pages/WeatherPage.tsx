import { Component, ReactNode } from 'react';
import Container from 'src/components/atoms/Container';
import Header from 'src/components/organisms/Header';
import UseCityWeather from 'src/components/services/query/helpers/UseCityWeather';
import WeatherAppTemplate from 'src/components/templates/WeatherAppTemplate';
import getCityId from 'src/utils/getCityId/getCityId';

const supportedCities = [
  {
    name: 'Ottawa',
    id: getCityId('Ottawa', 'CA'),
  },
  {
    name: 'Moscow',
    id: getCityId('Moscow', 'RU'),
  },
  {
    name: 'Tokyo',
    id: getCityId('Tokyo', 'JP'),
  },
];

export default class WeatherPage extends Component<{}, { active: string }> {
  state = {
    active: 'Ottawa',
  };

  render(): ReactNode {
    const cityId = supportedCities.find((city) => city.name === this.state.active)?.id;

    const setActive = (city: string) => {
      this.setState({ active: city });
    };

    return <WeatherAppTemplate cities={supportedCities} />;

    return (
      <Container full>
        <Container maxWidth>
          <Header active={this.state.active} setActive={setActive} />
          {/* <UseCityWeather cityId={cityId}>
            {(query) =>
              query.isLoading ? (
                <div>'Loading...' </div>
              ) : (
                <div>
                  <h1>{query.data?.city.name}</h1>
                  <table>
                    <thead>
                      <tr>
                        <th>Time</th>
                        <th>Day</th>
                        <th>Weather</th>
                      </tr>
                    </thead>
                    <tbody>
                      {query.data?.list.map((item) => (
                        <tr>
                          <td>{item.dt_txt}</td>
                          <td>
                            {new Date(item.dt_txt).toLocaleDateString(
                              navigator.language || 'en-US',
                              {
                                weekday: 'long',
                              }
                            )}
                          </td>
                          <td>{item.weather[0].main}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            }
          </UseCityWeather> */}
          {/* <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header> */}
        </Container>
      </Container>
    );
  }
}
