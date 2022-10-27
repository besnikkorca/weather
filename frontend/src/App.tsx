// import logo from './logo.svg';
import './App.scss';
import QueryClientProvider from './components/services/query/QueryClientProvider';
import WeatherPage from './pages/WeatherPage';

function App() {
  return (
    <QueryClientProvider>
      <WeatherPage />
    </QueryClientProvider>
  );
}

export default App;
