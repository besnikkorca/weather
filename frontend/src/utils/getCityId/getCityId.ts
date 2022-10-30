import cities from './city.list.min.json';

interface City {
  id: number;
  name: string;
  state: string;
  country: string;
}

export default function getCityId(name: string, country: string, state?: string) {
  if (!name) throw Error('City name is required');

  const found = (cities as City[]).find((city) => {
    const nameMatch = city.name === name;
    const countryMatch = city.country === country;
    if (state) {
      return nameMatch && countryMatch && city.state === state;
    }
    return nameMatch && countryMatch;
  });

  if (!found) throw Error('City not found');

  return found.id;
}
