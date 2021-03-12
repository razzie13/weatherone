// node_modules
import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

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
     cityName: 'Kitchener, ON'
  }
}

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <PageTitle cityName={this.state.cityName}/>
          </header>
          <main>
            <WeatherMain />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    )
  }
}





            // var date = new Date();
            // let currentTime = date.getTime()
            //let currentUnixTime = Date.now()

            
                
            // var sunTime;
            // function sunTimes()  {
            //     let morning;
            //     let riseOrSet;
            //     let sunriseTime = new Date(res.data.current.sunrise * 1000);
            //     //let sunriseTime = Date.now(res.data.current.sunrise);
            //     let sunsetTime = new Date(res.data.current.sunset * 1000);
            //     let tomorrowSunriseTime = new Date(res.data.daily[1].sunrise * 1000);

            //     console.log(currentTime);
            //     console.log(sunriseTime);

            //     if (currentTime < sunriseTime) {
            //         sunTime = sunriseTime
            //         morning = true
            //     }
            //     if (currentTime < sunsetTime) {
            //         sunTime = sunsetTime
            //         morning = false
            //     }
            //     if (currentTime > sunsetTime) {
            //         sunTime = tomorrowSunriseTime
            //         morning = true
            //     } 

            //     if (morning === true)  {
            //         morning = " AM";
            //         riseOrSet = "Sunrise: "
            //     } else  {
            //         morning = " PM"
            //         riseOrSet = "Sunset: "
            //     }
                

            //     let hours = sunTime.getHours(sunTime);
            //     if (hours > 12)  {
            //         hours = (hours - 12)
            //         }
            //     let minutes = "0" + sunTime.getMinutes(sunTime);
            //     sunTime = riseOrSet + hours + ':' + minutes.substr(-2) + morning;
            // }
            // sunTimes()

            // var weatherIcon;
            // //var responseIcon = res.data.current.weather[0].icon;
            // function convertWeatherIconToFontAwesome()  {
            //     if (res.data.current.weather[0].icon === '01d')  {faSun}; // clear
            //     if (res.data.current.weather[0].icon === '02d')  {faCloudSun}; // few clouds
            //     if (res.data.current.weather[0].icon === '03d')  {fasFaCloudSun}; // scattered clouds
            //     if (res.data.current.weather[0].icon === '04d')  {fasFaCloud}; // broken clouds
            //     if (res.data.current.weather[0].icon === '09d')  {fasFaCloudShowersHeavy}; // rain shower
            //     if (res.data.current.weather[0].icon === '10d')  {fasFaCloudRain}; // rain
            //     if (res.data.current.weather[0].icon === '11d')  {fasFaBolt}; // thunderstorm
            //     if (res.data.current.weather[0].icon === '13d')  {fasFaSnowflake}; // snow
            //     if (res.data.current.weather[0].icon === '50d')  {fasFaWater}; // mist
            // }
            // convertWeatherIconToFontAwesome()
            


