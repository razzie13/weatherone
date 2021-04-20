// node_modules
import React, { Component } from 'react'
import { v4 as uuidv4} from 'uuid'
import axios from 'axios'

// css
import './colours.css';
import './TemperatureColours.css'
import './layout.css';

// page components
import PageTitle from './components/PageTitle';
import WeatherMain from './components/WeatherInfo/WeatherMain'
import Footer from './components/Footer';
import SavedCities from './components/WeatherInfo/SavedCities'

export default class App extends Component {

constructor(props) {
  super(props)

  this.state = {
     cityName: null,
     currentLatitude: null,
     currentLongitude: null,
     isCityNameSaved: null,
     viewSavedCitiesInMemory: false,
     weatherData: null
  }

  this.saveCurrentLocation = this.saveCurrentLocation.bind(this);
  this.viewSavedCitiesWindow = this.viewSavedCitiesWindow.bind(this);
  this.hideSavedCitiesWindow = this.hideSavedCitiesWindow.bind(this);

  this.getWeatherDataFromIpAddress = this.getWeatherDataFromIpAddress.bind(this);
}

getWeatherDataFromIpAddress = () => {
  console.log('getWeatherDataFromIpAddress')
  axios.get('http://api.ipstack.com/135.23.120.246?access_key=350febb542643e0e1276efca404e6eb7')
  .then(res => {
    this.setState({ 
      cityName: res.data.city + ' ' + res.data.region_code, 
      currentLatitude: res.data.latitude, 
      currentLongitude: res.data.longitude,
      isCityNameSaved: 
        // eslint-disable-next-line
        localStorage.getItem('weatherone_locations') != null ?
        // eslint-disable-next-line
        (res.data.city + ' ' + res.data.region_code) == JSON.parse(localStorage.getItem('weatherone_locations')).cityName ? true : false
        : false
        
    }, () => {
    localStorage.getItem('weatherone_locations') === null ?
    localStorage.setItem('weatherone_locations', JSON.stringify([{'cityName': this.state.cityName, 'latitude':this.state.currentLatitude, 'longitude':this.state.currentLongitude}])) : localStorage.getItem('weatherone_locations')
    });
  })
  .then(() => {
      const weatherApi = axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.currentLatitude}&lon=${this.state.currentLongitude}&units=metric&appid=31a4da5ead9b1633c81fc2dba65ddee9`);
      return weatherApi
  })
  .then((response) => {
    this.setState({ weatherData: response }, () => { console.log(this.state.weatherData) })
  })
  .catch(function (error) {
    console.log('fail ' + error);
  });
}


componentDidMount()  {
  this.getWeatherDataFromIpAddress();
}

saveCurrentLocation = () => {
  localStorage.setItem('weatherone_locations', JSON.stringify({'cityName': this.state.cityName, 'latitude':this.state.currentLatitude, 'longitude':this.state.currentLongitude}))
}

viewSavedCitiesWindow = () => {
  this.setState({viewSavedCitiesInMemory: true}, () => console.log('viewSavedCities'))
}

hideSavedCitiesWindow = (e) => {
  this.setState({viewSavedCitiesInMemory: false}, () => console.log('hideSavedCities'))
}

  render() {

    return (
        <div className="App" key={uuidv4()}>
          <header className="App-header">
            <PageTitle hideSavedCities={this.hideSavedCitiesWindow} viewSavedCities={this.viewSavedCitiesWindow} cityName={this.state.cityName} latitude={this.state.currentLatitude} longitude={this.state.currentLongitude} isCityNameSaved={this.state.isCityNameSaved} saveCurrentLocation={this.saveCurrentLocation} />
          </header>
          <main key={uuidv4()}>

            {this.state.weatherData != null ?
            <WeatherMain cityName={this.state.cityName} latitude={this.state.currentLatitude} longitude={this.state.currentLongitude} viewSavedCities={this.viewSavedCitiesWindow} hideSavedCities={this.hideSavedCitiesWindow} viewSavedCitiesInMemory={this.state.viewSavedCitiesInMemory} data={this.state.weatherData}/> : null}
            {this.state.viewSavedCitiesInMemory ? 
                    <SavedCities hideSavedCities={this.hideSavedCitiesWindow}/> 
                    : null
                }
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
    )
  }
}
            


