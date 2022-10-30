import './App.scss';
import QueryClientProvider from './components/services/query/QueryClientProvider';
import WeatherPage from './pages/WeatherPage';
import './fonts';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <QueryClientProvider>
        <WeatherPage />
      </QueryClientProvider>
    );
  }
}
