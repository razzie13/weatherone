// node_modules
import React, { Component } from 'react'

// css
import './colours.css';
import './layout.css';

// page components
import PageTitle from './components/PageTitle';
import CurrentConditions from './components/CurrentConditions';
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
      <div className="App">
        <header className="App-header">
          <PageTitle cityName={this.state.cityName}/>
        </header>
        <main>
          <CurrentConditions />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
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

            // var precipitation = "No Rain for 12 Whole Hours";
            // function umbrellaToday()  {
            //     for (let i = 0; i < (res.data.hourly.length - 36); i++)  {
            //         if (res.data.hourly[i].rain)  {
            //             precipitation = "Pack Your Umbrella"
            //         } 
            //         if ((res.data.hourly[i].rain)  && (res.data.current.temp < 0))  {
            //             precipitation = "It will snow today"
            //         }
            //         console.log(res.data.hourly[i].rain);
            //     }
            // }
            // umbrellaToday()


            // var todayJacketForecast;
            // function jacketToday()  {
            //     if (res.data.current.temp >= 30)  {
            //         todayJacketForecast = "Wear your Shorts & Tanks!"
            //     }
            //     if (res.data.current.temp >= 16 && res.data.current.temp < 29)  {
            //         todayJacketForecast = "Wear your Tees & Shorts!"
            //     }
            //     if (res.data.current.temp >= 10 && res.data.current.temp < 15)  {
            //         todayJacketForecast = "Wear your Light Jacket"
            //     }
            //     if (res.data.current.temp >= 0 && res.data.current.temp < 9)  {
            //         todayJacketForecast = "Wear your Jacket"
            //     }
            //     if (res.data.current.temp < 0)  {
            //         todayJacketForecast = "Wear your Winter Jacket!"
            //     }
            // }
            // jacketToday()

            // var weatherIcon;
            // //var responseIcon = res.data.current.weather[0].icon;
            // function convertWeatherIconToFontAwesome()  {
            //     if (res.data.current.weather[0].icon === '01d')  {weatherIcon = "fas fa-sun"}; // clear
            //     if (res.data.current.weather[0].icon === '02d')  {weatherIcon = "fas fa-cloud-sun"}; // few clouds
            //     if (res.data.current.weather[0].icon === '03d')  {weatherIcon = "fas fa-cloud-sun"}; // scattered clouds
            //     if (res.data.current.weather[0].icon === '04d')  {weatherIcon = "fas fa-cloud"}; // broken clouds
            //     if (res.data.current.weather[0].icon === '09d')  {weatherIcon = "fas fa-cloud-showers-heavy"}; // rain shower
            //     if (res.data.current.weather[0].icon === '10d')  {weatherIcon = "fas fa-cloud-rain"}; // rain
            //     if (res.data.current.weather[0].icon === '11d')  {weatherIcon = "fas fa-bolt"}; // thunderstorm
            //     if (res.data.current.weather[0].icon === '13d')  {weatherIcon = "fas fa-snowflake"}; // snow
            //     if (res.data.current.weather[0].icon === '50d')  {weatherIcon = "fas fa-water"}; // mist
            // }
            // convertWeatherIconToFontAwesome()
            


            // this.setState({ 
            //     conditions : weatherIcon,
            //     //conditions : (res.data.current.weather[0].icon),
            //     conditionsDescription : (res.data.current.weather[0].description),
            //     temperature : Math.round(res.data.current.temp),
            //     feelsLike : Math.round(res.data.current.feels_like),
            //     uvi : Math.round(res.data.current.uvi),
            //     humidity : (res.data.current.humidity),
            //     sunTime : sunTime,
            //     umbrellaToday : precipitation,
            //     jacketToday : todayJacketForecast,

            //     tomorrowHighTemp : Math.round(res.data.daily[1].temp.max),
            //     tomorrowFeelsLike : Math.round(res.data.daily[1].feels_like.day),
            //     tomorrowConditions : (res.data.daily[1].weather[0].main),
        
            //     tomorrowNightLowTemp : Math.round(res.data.daily[1].temp.night),
            //     tomorrowNightFeelsLike : Math.round(res.data.daily[1].feels_like.night),
                
            //  })
