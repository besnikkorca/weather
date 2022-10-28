import { Component } from 'react';
import { Props } from './types';
import styles from './List.module.scss';

export default class List extends Component<Props> {
  render() {
    return <ul className={styles.list}>{this.props.children}</ul>;
  }
}
