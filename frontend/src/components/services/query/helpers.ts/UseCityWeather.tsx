import { Component } from 'react';
import { UseQueryResult } from 'react-query';
import { REACT_APP_OPEN_WEATHER_KEY, REACT_APP_WEATHER_API_URL } from 'src/config';
import UseQuery from '../UseQuery';
import { Forecast } from './types';

interface Props {
  children: (query: UseQueryResult<Forecast>) => JSX.Element;
  cityId: number;
}

export default class UseCityWeather extends Component<Props> {
  render() {
    const { cityId } = this.props;
    return (
      <UseQuery<Forecast>
        queryKey={[
          REACT_APP_WEATHER_API_URL,
          'data/2.5/forecast',
          { cityId, REACT_APP_OPEN_WEATHER_KEY },
        ]}
        fn={({ signal }) =>
          fetch(
            `${REACT_APP_WEATHER_API_URL}/data/2.5/forecast?id=${cityId}&appid=${REACT_APP_OPEN_WEATHER_KEY}`,
            {
              signal,
            }
          ).then((res) => res.json())
        }
        options={{
          staleTime: 1000 * 60 * 5,
        }}
      >
        {(query) => this.props.children(query)}
      </UseQuery>
    );
  }
}