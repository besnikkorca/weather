import { Component, ReactNode } from 'react';
import Switch from 'atoms/Switch';
import { Props, State, Theme } from './types';
import styles from './DarkMode.module.scss';

export default class DarkMode extends Component<Props, State> {
  state = {
    theme: (localStorage.getItem('theme') as Theme) || 'light',
  };

  componentDidMount(): void {
    this.detectColorScheme();
  }

  detectColorScheme() {
    let theme: Theme = 'light';

    //local storage is used to override OS theme settings
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'dark') {
        theme = 'dark';
      }
    } else if (!window.matchMedia) {
      return false;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark';
    }

    document.documentElement.setAttribute('data-theme', theme);
    this.setState({ theme });
  }

  switchTheme = () => {
    const newTheme = this.state.theme === 'light' ? 'dark' : 'light';
    if (newTheme === 'dark') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      this.setState({ theme: 'dark' });
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
      this.setState({ theme: 'light' });
    }
  };

  render(): ReactNode {
    const { theme } = this.state;
    return (
      <div className={styles.toggle}>
        <Switch setChecked={this.switchTheme} checked={theme === 'dark'} />
      </div>
    );
  }
}
