// node_modules
import React, { Component } from 'react'
import { v4 as uuidv4} from 'uuid'
import axios from 'axios'

// css
import './colours.css';
import './TemperatureColours.css'
import './CurrentConditions.css'
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
     weatherData: null, 
     savedCities: null,
     homeCity: null,
     locationSource: null
  }

  this.addToSavedCities = this.addToSavedCities.bind(this);
  this.viewSavedCitiesWindow = this.viewSavedCitiesWindow.bind(this);
  this.selectOtherLocation = this.selectOtherLocation.bind(this);
  this.hideSavedCitiesWindow = this.hideSavedCitiesWindow.bind(this);

  this.getWeatherDataFromIpAddress = this.getWeatherDataFromIpAddress.bind(this);
  this.getWeatherDataFromGps = this.getWeatherDataFromGps.bind(this);
}

getWeatherDataFromGps = () => {
  console.log('getWeatherDataFromGps')
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude + ' ' + position.coords.longitude)
      this.setState({ 
        currentLatitude: position.coords.latitude, 
        currentLongitude: position.coords.longitude,
        locationSource: 'gpsCoords'   
      }, () => console.log(this.state.cityName))
    })
    
    axios.get('https://ipapi.co/json/')
    .then(res => { 
      this.setState({ 
        cityName: res.data.city + ' ' + res.data.region_code 
      }, console.log(this.state.cityName))
    })
}


getWeatherDataFromIpAddress = () => {
  console.log('getWeatherDataFromIpAddress')
    axios.get('https://ipapi.co/json/')
    .then(res => {
       this.setState({ 
        cityName: res.data.city + ' ' + res.data.region_code, 
        currentLatitude: res.data.latitude, 
        currentLongitude: res.data.longitude,
        locationSource: 'ipAddress'      
      }, () => {
      localStorage.getItem('weatherone_locations') === null ?
        localStorage.setItem('weatherone_locations', 
          JSON.stringify([{
            'cityName': this.state.cityName, 
            'latitude':this.state.currentLatitude, 
            'longitude':this.state.currentLongitude
          }]))
        : this.setState({ savedCities: JSON.parse(localStorage.getItem('weatherone_locations')) }, () => console.log(this.state.savedCities + ' ' + this.state.locationSource))
        localStorage.getItem('weatherone_locations')
      });
    })
    .then(() => {
      const weatherApi = axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.currentLatitude}&lon=${this.state.currentLongitude}&units=metric&appid=31a4da5ead9b1633c81fc2dba65ddee9`);
      return weatherApi
  })
  .then((response) => {this.setState({ weatherData: response }, () => console.log(response))})
  .catch(error => {console.log('fail! ' + error)});
}

componentDidMount()  {

  if(!navigator.geolocation) {
    this.getWeatherDataFromIpAddress();
  } else {
    this.getWeatherDataFromGps();
  }
}

componentDidUpdate(prevProps, prevState)  {
  console.log('componentDidUpdate')
  prevState.cityName !== this.state.cityName ? 
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.currentLatitude}&lon=${this.state.currentLongitude}&units=metric&appid=31a4da5ead9b1633c81fc2dba65ddee9`)
    .then((response) => {this.setState({ weatherData: response }, () => console.log(/*'weather data has been updated'*/ response))}) : console.log('weather data has not been updated')
  }

viewSavedCitiesWindow = () => {
  this.setState({viewSavedCitiesInMemory: true}, () => console.log('viewSavedCities'))
}

selectOtherLocation = (e) => {
  let localLocationsInStorage = JSON.parse(localStorage.getItem('weatherone_locations'))
  localLocationsInStorage.map(city => 
    (city.cityName === e ? this.setState({cityName: city.cityName, currentLatitude: city.latitude, currentLongitude: city.longitude, viewSavedCitiesInMemory: false, locationSource: 'ipAddress'}, () => {
      console.log(true + ' ' + this.state.cityName + ' ' + this.state.currentLatitude + ' ' + this.state.currentLongitude)
    })
    : null))
}

addToSavedCities = () => {
  let newSavedCity;
  console.log('addToSavedCities')
  newSavedCity = {cityName: this.state.cityName, latitude: this.state.currentLatitude, longitude: this.state.currentLongitude}
  this.setState({savedCities: [...this.state.savedCities, newSavedCity]}, () => localStorage.setItem('weatherone_locations', JSON.stringify(this.state.savedCities))) 
}



hideSavedCitiesWindow = (e) => {
  this.setState({viewSavedCitiesInMemory: false}, () => console.log('hideSavedCities'))
}

  render() {

    return (
        <div className="App" key={uuidv4()}>
          <header className="App-header">
            <PageTitle locationSource={this.state.locationSource} 
                       hideSavedCities={this.hideSavedCitiesWindow} 
                       viewSavedCities={this.viewSavedCitiesWindow} 
                       cityName={this.state.cityName} 
                       latitude={this.state.currentLatitude} 
                       longitude={this.state.currentLongitude} 
                       isCityNameSaved={this.state.isCityNameSaved} 
                       saveCurrentLocation={this.saveCurrentLocation}
                       getWeatherDataFromGps={this.getWeatherDataFromGps}
                       addToSavedCities={this.addToSavedCities}
                       savedCities={this.state.savedCities}
                       />
          </header>
          <main key={uuidv4()}>

            {this.state.weatherData != null ?
            <WeatherMain cityName={this.state.cityName} latitude={this.state.currentLatitude} longitude={this.state.currentLongitude} viewSavedCities={this.viewSavedCitiesWindow} hideSavedCities={this.hideSavedCitiesWindow} viewSavedCitiesInMemory={this.state.viewSavedCitiesInMemory} data={this.state.weatherData}/> : null}
            {this.state.viewSavedCitiesInMemory ? 
                    <SavedCities selectOtherLocation={this.selectOtherLocation} hideSavedCities={this.hideSavedCitiesWindow}/> 
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
            


