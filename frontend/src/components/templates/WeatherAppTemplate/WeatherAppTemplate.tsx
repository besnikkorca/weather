import { Component } from 'react';
import WeatherForecast from 'organisms/WeatherForecast';
import Container from 'atoms/Container';
import Header from 'organisms/Header';
import { Props } from './types';
import styles from './WeatherAppTemplate.module.scss';

export default class WeatherAppTemplate extends Component<Props> {
  state = {
    active: 'Ottawa',
  };

  setActive = (city: string) => {
    this.setState({ active: city });
  };

  getCityId = () => {
    return this.props.cities.find(({ name }) => name === this.state.active)?.id;
  };

  render() {
    const { cities } = this.props;
    const cityId = this.getCityId();
    return (
      <Container full className={styles.contentWrapper}>
        <Container maxWidth>
          <Header active={this.state.active} setActive={this.setActive} cities={cities} />
          {cityId ? (
            <WeatherForecast cityId={cityId} />
          ) : (
            <Container>
              {/* TODO: Handle these scenarios properly with a better design */}
              {cities.length === 0 ? 'No cities available.' : 'Please select a city!'}
            </Container>
          )}
        </Container>
      </Container>
    );
  }
}
