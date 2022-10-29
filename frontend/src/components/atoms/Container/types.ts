export enum BG {
  transparent = 'transparent',
  main = 'main',
}
export type Props = {
  children?: React.ReactNode;
  flexColumn?: boolean;
  full?: boolean;
  bg: BG;
  maxWidth?: boolean;
  border?: boolean;
  centerContent?: boolean;
  centerHorizontal?: boolean;
  centerVertical?: boolean;
  style?: React.CSSProperties | undefined;
  borderRadius?: boolean;
  shadow?: boolean;
  className?: string;
};
