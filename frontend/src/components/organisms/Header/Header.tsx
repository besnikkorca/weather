import { Component, ReactNode } from 'react';
import CitiesList from 'molecules/CitiesList';
import styles from './Header.module.scss';
import { Props } from './types';
import DarkMode from 'src/components/molecules/DarkMode';

export default class Header extends Component<Props> {
  render(): ReactNode {
    const { cities, active, setActive } = this.props;
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <CitiesList active={active} setActive={setActive} cities={cities} />
          <DarkMode />
        </nav>
      </header>
    );
  }
}
