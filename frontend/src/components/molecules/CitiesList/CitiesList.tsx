import { Component } from 'react';
import List from 'atoms/List';
import ListItem from 'atoms/ListItem';
import { Props } from './types';

export default class CitiesList extends Component<Props> {
  render() {
    return (
      <List>
        {['Ottawa', 'Moscow', 'Tokyo'].map((city) => (
          <ListItem key={city} active={city === this.props.active} onClick={this.props.setActive}>
            {city}
          </ListItem>
        ))}
      </List>
    );
  }
}
