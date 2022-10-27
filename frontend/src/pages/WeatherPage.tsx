import { Component, ReactNode } from 'react';
import Container from 'src/components/atoms/Container';
import UseCityWeather from 'src/components/services/query/helpers/UseCityWeather';
import getCityId from 'src/utils/getCityId/getCityId';

export default class WeatherPage extends Component {
  render(): ReactNode {
    const cityId = getCityId('Moscow', 'RU');

    return (
      <Container full centerContent>
        <Container maxWidth border>
          <UseCityWeather cityId={cityId}>
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
          </UseCityWeather>
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
