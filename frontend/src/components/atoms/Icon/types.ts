import { CSSProperties } from 'react';
import { WeatherMain } from 'services/query/helpers/types';

export interface Props {
  name: WeatherMain;
  style?: CSSProperties | undefined;
  size: 'normal' | 'medium' | 'large';
  color?: 'main' | 'secondary';
}
