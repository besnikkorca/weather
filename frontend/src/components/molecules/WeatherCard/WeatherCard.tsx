import { Component } from 'react';
import Container from 'atoms/Container';
import styles from './WeatherCard.module.scss';
import { Props } from './types';
import Text from 'src/components/atoms/Text';
import { TextColor, TextFamily, TextSize } from 'src/components/atoms/Text/types';
import Icon from 'src/components/atoms/Icon';

export default class WeatherCard extends Component<Props> {
  render() {
    const { forecast } = this.props;

    return (
      <Container centerContent flexColumn className={styles.main}>
        <Text color={TextColor.color2} size={TextSize.large}>
          Today
        </Text>
        <Container centerHorizontal>
          <Icon name={forecast.weather[0].main} size="large" />
          <Container className={styles.details}>
            <Text color={TextColor.color3} size={TextSize.xLarge} family={TextFamily.teko} noMargin>
              {Math.round(forecast.main.temp)}°
            </Text>
            <Text color={TextColor.color4} size={TextSize.large} noMargin style={{ marginTop: -5 }}>
              {forecast.weather[0].main}
            </Text>
          </Container>
        </Container>
      </Container>
    );
  }
}
