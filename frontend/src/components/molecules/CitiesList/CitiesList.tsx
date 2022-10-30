import { Component } from 'react';
import List from 'atoms/List';
import ListItem from 'atoms/ListItem';
import { Props } from './types';

export default class CitiesList extends Component<Props> {
  render() {
    const { cities } = this.props;
    return (
      <List>
        {cities.map(({ name: cityName }) => (
          <ListItem
            key={cityName}
            active={cityName === this.props.active}
            onClick={this.props.setActive}
          >
            {cityName}
          </ListItem>
        ))}
      </List>
    );
  }
}
