import classNames from 'classnames';
import { Component } from 'react';
import styles from './Text.module.scss';
import { Props, TextFamily, TextSize, TextWeight } from './types';

export default class Text extends Component<Props> {
  static defaultProps: Partial<Props> = {
    size: TextSize.normal,
    weight: TextWeight.normal,
    noMargin: false,
  };

  render() {
    const { noMargin, size, weight, family, style } = this.props;
    return (
      <p
        className={classNames(styles.default, {
          [styles.noMargin]: noMargin,
          [styles.small]: size === TextSize.small,
          [styles.normal]: size === TextSize.normal,
          [styles.large]: size === TextSize.large,
          [styles.xLarge]: size === TextSize.xLarge,
          [styles.weightNormal]: weight === TextWeight.normal,
          [styles.bold]: weight === TextWeight.bold,
          [styles.teko]: family === TextFamily.teko,
        })}
        style={style}
      >
        {this.props.children}
      </p>
    );
  }
}
