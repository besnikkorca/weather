import classNames from 'classnames';
import { Component } from 'react';
import styles from './Switch.module.scss';
import { Props } from './types';

export default class Switch extends Component<Props> {
  handleCheck = () => {
    const { checked, setChecked } = this.props;
    if (!setChecked) return;

    setChecked(!checked);
  };

  render() {
    const { checked } = this.props;
    return (
      <label className={styles.switch}>
        <input type="checkbox" checked={checked} onChange={this.handleCheck} />
        <span className={classNames(styles.slider, styles.round)}></span>
      </label>
    );
  }
}
