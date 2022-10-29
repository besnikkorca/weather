import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCloudRain, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { Props } from './types';
import styles from './Icon.module.scss';
import classNames from 'classnames';

export default class Icon extends Component<Props> {
  static defaultProps: Partial<Props> = {
    color: 'main',
    size: 'normal',
  };

  getIconByName = () => {
    switch (this.props.name) {
      case 'cloud':
        return faCloud;
      case 'cloud-rain':
        return faCloudRain;
      case 'cloud-sun':
        return faCloudSun;
      default:
        return faCloud;
    }
  };

  getClassName = () => {
    const { size } = this.props;
    return classNames({
      [styles.col]: this.props.color === 'main',
      [styles.normal]: size === 'normal',
      [styles.medium]: size === 'medium',
      [styles.large]: size === 'large',
    });
  };

  render() {
    const { style } = this.props;
    return (
      <FontAwesomeIcon className={this.getClassName()} style={style} icon={this.getIconByName()} />
    );
  }
}
