import { Component } from 'react';
import { Props } from './types';
import Container from 'atoms/Container';
import Text from 'atoms/Text';
import { TextFamily, TextSize } from 'src/components/atoms/Text/types';
import Icon from 'src/components/atoms/Icon';
import { DayForecast } from 'src/components/services/query/helpers/types';
import styles from './WeatherList.module.scss';
import classNames from 'classnames';

export default class WeatherList extends Component<Props> {
  dayName = (forecast: DayForecast) => {
    return new Date(forecast.dt_txt)
      .toLocaleDateString(navigator.language || 'en-US', {
        weekday: 'long',
      })
      .substring(0, 3);
  };

  getCardClassName(idx: number, forecasts: DayForecast[]): string | undefined {
    return classNames(styles.card, {
      [styles.firstCard]: idx === 0,
      [styles.notFirstCard]: idx !== 0,
      [styles.lastCard]: idx === forecasts.length - 1,
    });
  }

  render() {
    const { forecasts } = this.props;
    return (
      <Container centerHorizontal maxWidth className={styles.container}>
        {forecasts.map((forecast, idx) => (
          <Container
            key={forecast.dt_txt}
            className={this.getCardClassName(idx, forecasts)}
            centerVertical
            border
          >
            <Text size={TextSize.normal}>{this.dayName(forecast)}</Text>
            <Icon name={forecast.weather[0].main} />
            <Text size={TextSize.small} family={TextFamily.teko} noMargin>
              {Math.round(forecast.main.temp)}°
            </Text>
          </Container>
        ))}
      </Container>
    );
  }
}
