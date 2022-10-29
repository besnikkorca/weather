import getCityId from './getCityId/getCityId';

const supportedCities = [
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
];
export default supportedCities;
