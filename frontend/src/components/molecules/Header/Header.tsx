import { Component, ReactNode } from 'react';
import List from 'src/components/atoms/List';
import ListItem from 'src/components/atoms/ListItem';
import styles from './Header.module.scss';
import { Props } from './types';

export default class Header extends Component<Props> {
  render(): ReactNode {
    return (
      <header className={styles.header}>
        <nav>
          <List>
            {['Ottawa', 'Moscow', 'Tokyo'].map((city) => (
              <ListItem
                key={city}
                active={city === this.props.active}
                onClick={this.props.setActive}
              >
                {city}
              </ListItem>
            ))}
          </List>
        </nav>
      </header>
    );
  }
}
