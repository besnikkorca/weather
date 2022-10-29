import classNames from 'classnames';
import { Component } from 'react';
import styles from './Container.module.scss';
import { Props, BG } from './types';

export default class Container extends Component<Props> {
  static defaultProps: Partial<Props> = {
    bg: BG.main,
    full: false,
    flexColumn: false,
    maxWidth: false,
    border: false,
    centerContent: false,
    centerHorizontal: false,
    centerVertical: false,
    borderRadius: false,
    shadow: false,
  };

  getClassNames = () => {
    const {
      full,
      flexColumn,
      bg,
      maxWidth,
      centerContent,
      centerHorizontal,
      centerVertical,
      border,
      borderRadius,
      shadow,
    } = this.props;
    return classNames(styles.container, {
      [styles.full]: full,
      [styles.flexColumn]: flexColumn,
      [styles.mainBG]: bg === BG.main,
      [styles.transparentBG]: bg === BG.transparent,
      [styles.maxWidthLarge]: maxWidth,
      [styles.centerContent]: centerContent,
      [styles.centerHorizontal]: centerHorizontal,
      [styles.centerVertical]: centerVertical,
      [styles.border]: border,
      [styles.borderRadius]: borderRadius,
      [styles.shadow]: shadow,
    });
  };

  render() {
    const { style, children } = this.props;
    return (
      <div className={this.getClassNames()} style={style}>
        {children}
      </div>
    );
  }
}
