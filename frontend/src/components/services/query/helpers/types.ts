interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export type WeatherMain = 'Rain' | 'Clouds' | 'Clear' | 'Snow' | 'Sun';

interface Weather {
  id: number;
  main: WeatherMain;
  description: string;
  icon: string;
}

interface Clouds {
  all: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Sys {
  pod: string;
}

interface Rain {
  '3h': number;
}

interface Snow {
  '3h': number;
}

export interface DayForecast {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
  rain: Rain;
  snow: Snow;
}

interface Coord {
  lat: number;
  lon: number;
}

interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface Forecast {
  cod: string;
  message: number;
  cnt: number;
  list: DayForecast[];
  city: City;
}
