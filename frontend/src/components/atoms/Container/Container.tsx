import classNames from 'classnames';
import { Component } from 'react';
import styles from './Container.module.scss';
import { Props, BG } from './types';

export default class Container extends Component<Props> {
  static defaultProps = { bg: BG.main, full: false };
  render() {
    return (
      <div
        className={classNames(styles.container, {
          [styles.full]: this.props.full,
          [styles.bg]: this.props.bg,
        })}
      >
        {this.props.children}
      </div>
    );
  }
}
