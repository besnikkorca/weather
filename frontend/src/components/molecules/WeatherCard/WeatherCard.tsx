import { Component } from 'react';
import Container from 'atoms/Container';
import styles from './WeatherCard.module.scss';
import { Props } from './types';
import Text from 'src/components/atoms/Text';
import { TextFamily, TextSize } from 'src/components/atoms/Text/types';
import Icon from 'src/components/atoms/Icon';

export default class WeatherCard extends Component<Props> {
  render() {
    return (
      <Container centerContent flexColumn style={{ padding: '1.5rem 0 4rem' }}>
        <Text size={TextSize.large}>Today</Text>
        <Container centerHorizontal>
          <Icon name="cloud" size="large" />
          <Container
            style={{
              margin: '20px 0px 0px',
              paddingLeft: 25,
              paddingRight: 0,
            }}
          >
            <Text size={TextSize.xLarge} family={TextFamily.teko} noMargin>
              19°
            </Text>
            <Text size={TextSize.large} noMargin style={{ marginTop: -5 }}>
              Clouds
            </Text>
          </Container>
        </Container>
      </Container>
    );
  }
}
