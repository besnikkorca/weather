import classNames from 'classnames';
import { Component } from 'react';
import styles from './Text.module.scss';
import { Props } from './types';

export default class Text extends Component<Props> {
  static defaultProps = {};
  render() {
    return <p className={classNames(styles.default)}>{this.props.children}</p>;
  }
}
