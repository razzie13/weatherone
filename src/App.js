// node_modules
import React, { Component } from 'react'
import { v4 as uuidv4} from 'uuid'

// css
import './colours.css';
import './TemperatureColours.css'
import './layout.css';

// page components
import PageTitle from './components/PageTitle';
import WeatherMain from './components/WeatherInfo/WeatherMain'
import Footer from './components/Footer';

export default class App extends Component {

constructor(props) {
  super(props)

  this.state = {
     cityName: 'Kitchener, ON',
     currentLatitude: null,
     currentLongitude: null
  }
}

componentDidMount()  {
  const getLocation = pos => {
    this.setState({currentLatitude: pos.coords.latitude.toFixed(2), currentLongitude: pos.coords.longitude.toFixed(2)}, () => console.log(this.state.currentLatitude + ' ' + this.state.currentLongitude))
  }
  
  const error = err => { console.warn(`ERROR(${err.code}): ${err.message}`) }

  navigator.geolocation.getCurrentPosition(getLocation, error);

  localStorage.getItem('weatherone_locations') === null ?
  localStorage.setItem('weatherone_locations', [this.state.currentLatitude, this.state.currentLongitude]) : localStorage.getItem('weatherone_locations')
}

  render() {
    return (
        <div className="App" key={uuidv4()}>
          <header className="App-header">
            <PageTitle cityName={this.state.cityName} latitude={this.state.currentLatitude} longitude={this.state.currentLongitude}/>
          </header>
          <main key={uuidv4()}>
            <WeatherMain key={uuidv4()} latitude={this.state.currentLatitude} longitude={this.state.currentLongitude}/>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
    )
  }
}
            


