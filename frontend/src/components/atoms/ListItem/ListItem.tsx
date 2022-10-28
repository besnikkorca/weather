import classNames from 'classnames';
import React, { Component } from 'react';
import styles from './ListItem.module.scss';
import { Props } from './types';

export default class ListItem extends Component<Props> {
  handleOnClick = () => this.props.onClick(this.props.children?.toString() || '');

  render() {
    return (
      <li
        onClick={this.handleOnClick}
        className={classNames(
          styles.listItem,
          this.props.active ? styles.active : styles.notActive
        )}
      >
        {this.props.children}
      </li>
    );
  }
}
