import getCityId from 'src/utils/getCityId/getCityId';

const citiesList = [
  {
    name: 'Ottawa',
    id: getCityId('Ottawa', 'CA'),
  },
  {
    name: 'Moscow',
    id: getCityId('Moscow', 'RU'),
  },
  {
    name: 'Tokyo',
    id: getCityId('Tokyo', 'JP'),
  },
  {
    name: 'London',
    id: getCityId('London', 'GB'),
  },
  {
    name: 'New York',
    id: getCityId('New York', 'US'),
  },
];
export default citiesList;
