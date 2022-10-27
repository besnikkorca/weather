export enum BG {
  main = 'main',
}
export type Props = {
  children?: React.ReactNode;
  full?: boolean;
  bg: BG;
  maxWidth?: boolean;
  border?: boolean;
  centerContent?: boolean;
};
