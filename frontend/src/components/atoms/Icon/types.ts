import { CSSProperties } from 'react';

export interface Props {
  name: 'cloud' | 'cloud-rain' | 'cloud-sun';
  style?: CSSProperties | undefined;
  size: 'normal' | 'medium' | 'large';
  color?: 'main';
}
