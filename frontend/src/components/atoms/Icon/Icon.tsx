import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faCloudRain,
  faCloudSun,
  faSnowflake,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
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
      case 'Clouds':
        return faCloud;
      case 'Rain':
        return faCloudRain;
      case 'Sun':
        return faCloudSun;
      case 'Snow':
        return faSnowflake;
      case 'Clear':
        return faSun;
      default:
        throw Error(`Not found - ${this.props.name}`);
    }
  };

  getIsSunny = () => {
    const { name } = this.props;
    return ['Sun', 'Clear'].includes(name);
  };

  getClassName = () => {
    const { size } = this.props;
    const isSunny = this.getIsSunny();
    return classNames({
      [styles.col]: this.props.color === 'main' && !isSunny,
      [styles.colSec]: this.props.color === 'secondary' || isSunny,
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
