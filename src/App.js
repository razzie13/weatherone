import React from 'react';

import './colours.css';
import './layout.css';

import PageTitle from './PageTitle';
import CityName from './CityName';
import CurrentConditions from './CurrentConditions';
import WeatherWarnings from './WeatherWarnings'
import TodayTemperature from './TodayTemperature';
import TodayPrecipitation from './TodayPrecipitation';
import TomorrowForecast from './TomorrowForecast';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageTitle />
      </header>
      <main>
        <CityName/>
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
