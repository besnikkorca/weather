import { City } from 'templates/WeatherAppTemplate/types';

export interface Props {
  active: string;
  setActive: (active: string) => void;
  cities: City[];
}
