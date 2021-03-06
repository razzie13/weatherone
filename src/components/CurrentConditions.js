import React, { Component } from 'react'
import axios from 'axios'

import GetWeatherDataCurrent from './GetWeatherDataCurrent'
import DayAtAGlance from './DayAtAGlance'

export default class CurrentConditions extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
            conditions : null,
            conditionsDescription : null,
            temperature : null,
            feelsLike : null,
            uvi : null,
            humidex : null,
            sunTime : null,
            umbrellaToday : null,
            jacketToday : null,
      
            tomorrowHighTemp : null,
            tomorrowFeelsLike : null,
            tomorrowConditions : null,
      
            tomorrowNightLowTemp : null,
            tomorrowNightFeelsLike : null        
        }
      }
    
      componentDidMount()  {
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=43.4516&lon=-80.4925&units=metric&appid=31a4da5ead9b1633c81fc2dba65ddee9`)
    
        .then(res => {
          console.log(res)
          this.setState({ 
            conditions : (res.data.current.weather[0].icon),
            conditionsDescription : (res.data.current.weather[0].description),
            temperature : Math.round(res.data.current.temp),
            feelsLike : Math.round(res.data.current.feels_like),
            uvi : Math.round(res.data.current.uvi),
            humidity : (res.data.current.humidity),
            sunTime : null,
            umbrellaToday : null,
            jacketToday : null,
    
            tomorrowHighTemp : Math.round(res.data.daily[1].temp.max),
            tomorrowFeelsLike : Math.round(res.data.daily[1].feels_like.day),
            tomorrowConditions : (res.data.daily[1].weather[0].main),
      
            tomorrowNightLowTemp : Math.round(res.data.daily[1].temp.night),
            tomorrowNightFeelsLike : Math.round(res.data.daily[1].feels_like.night),
              
          })

          var todayJacketForecast;
          function jacketToday()  {
              if (res.data.current.temp >= 30)  {
                  todayJacketForecast = "Wear your Shorts & Tanks!"
              }
              if (res.data.current.temp >= 16 && res.data.current.temp < 29)  {
                  todayJacketForecast = "Wear your Tees & Shorts!"
              }
              if (res.data.current.temp >= 10 && res.data.current.temp < 15)  {
                  todayJacketForecast = "Wear your Light Jacket"
              }
              if (res.data.current.temp >= 0 && res.data.current.temp < 9)  {
                  todayJacketForecast = "Wear your Jacket"
              }
              if (res.data.current.temp < 0)  {
                  todayJacketForecast = "Wear your Winter Jacket!"
              }
              this.setState({
                  jacketToday: todayJacketForecast
              })
          }
          jacketToday()

          var precipitation = "No Rain for 12 Whole Hours";
          function umbrellaToday()  {
              for (let i = 0; i < (res.data.hourly.length - 36); i++)  {
                  if (res.data.hourly[i].rain)  {
                      precipitation = "Pack Your Umbrella"
                  } 
                  if ((res.data.hourly[i].rain)  && (res.data.current.temp < 0))  {
                      precipitation = "It will snow today"
                  }
                  console.log(res.data.hourly[i].rain);
                  this.setState({
                      umbrellaToday: precipitation
                  })
              }
          }
          umbrellaToday()

        }).catch((err) => {
          console.log(err)
        });


      }

    render() {
        return (
            <div>
                <div className="app-section-full-width"><h3>Right Now:</h3></div>
                <div className="app-section-half-width-container">
                    <GetWeatherDataCurrent id="conditions"/>
                    <GetWeatherDataCurrent id="temperature"/>
                    <GetWeatherDataCurrent id="uv-index"/>
                    <GetWeatherDataCurrent id="humidity"/>
                </div>

                <div className="app-section-full-width"><h3>Your Day at a Glance:</h3></div>

                    <DayAtAGlance styling={"app-section-full-width text-center day-outlook no-weather-alerts"} info={null}/>
                    <DayAtAGlance styling={"app-section-full-width day-outlook text-center jacket-no-need"} info={this.state.jacketToday}/>
                    <DayAtAGlance styling={"app-section-full-width day-outlook text-center rain-coming"} info={this.state.umbrellaToday}/>
                    <DayAtAGlance styling={"app-section-full-width day-outlook text-center"}/>



            </div>
        )
    }
}
