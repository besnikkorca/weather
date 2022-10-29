import { Component } from 'react';
import styles from './WeatherList.module.scss';
import { Props } from './types';
import Container from 'atoms/Container';
import Text from 'atoms/Text';
import { TextFamily, TextSize } from 'src/components/atoms/Text/types';
import Icon from 'src/components/atoms/Icon';

export default class WeatherList extends Component<Props> {
  render() {
    return (
      <Container centerHorizontal maxWidth style={{ margin: 0, padding: 0, marginTop: '1rem' }}>
        {[
          { day: 'Wed', temp: 18 },
          { day: 'Thu', temp: 18 },
          { day: 'Fri', temp: 19 },
          { day: 'Sat', temp: 21 },
        ].map((day, idx) => (
          <Container
            key={day.day}
            style={{
              flex: 1,
              padding: '10px 0px 15px',
              ...(idx === 0 && { borderBottomLeftRadius: 10 }),
              ...(idx === 3 && { borderBottomRightRadius: 10 }),
            }}
            centerVertical
            border
          >
            <Text size={TextSize.normal}>{day.day}</Text>
            <Icon name="cloud-rain" />
            <Text size={TextSize.small} family={TextFamily.teko} noMargin>
              {day.temp}°
            </Text>
          </Container>
        ))}
      </Container>
    );
  }
}
