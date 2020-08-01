// node_modules
import React from 'react';

// css
import './colours.css';
import './layout.css';

//import GetWeatherData from './components/GetWeatherData';

// page components
import PageTitle from './components/PageTitle';
import CurrentConditions from './components/CurrentConditions';
import WeatherWarnings from './components/WeatherWarnings';
import TodayTemperature from './components/TodayTemperature';
import TodayPrecipitation from './components/TodayPrecipitation';
import TomorrowForecast from './components/TomorrowForecast';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageTitle />
      </header>
      <main>
        <CurrentConditions />
        <WeatherWarnings />
        <TodayTemperature />
        <TodayPrecipitation />
        <TomorrowForecast />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
