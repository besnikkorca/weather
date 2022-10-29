import React from 'react';

export enum TextFamily {
  teko = 'teko',
}

export enum TextWeight {
  normal = 'normal',
  bold = 'bold',
}

export enum TextSize {
  small = 'small',
  normal = 'normal',
  large = 'large',
  xLarge = 'xLarge',
}
export interface Props {
  noMargin?: boolean;
  children: React.ReactNode;
  size?: TextSize;
  weight?: TextWeight;
  family?: TextFamily | undefined;
  style?: React.CSSProperties | undefined;
}
