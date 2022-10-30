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

export enum TextColor {
  color1 = 'color1',
  color2 = 'color2',
  color3 = 'color3',
  color4 = 'color4',
}
export interface Props {
  noMargin?: boolean;
  children: React.ReactNode;
  size?: TextSize;
  weight?: TextWeight;
  family?: TextFamily | undefined;
  style?: React.CSSProperties | undefined;
  color?: TextColor;
}
