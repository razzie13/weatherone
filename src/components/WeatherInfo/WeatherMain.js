import React, { Component } from 'react'
import axios from 'axios'

import WeatherConditions from './WeatherConditions'
import LongRangeWeather from './LongRangeWeather'
import { Route } from 'react-router'

export default class WeatherMain extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            rightNow: true,
            LongRange: false,

            conditions : null,
            conditionsDescription : null,
            temperature : null,
            feelsLike : null,
            uvi : null,
            humidity : null,
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

    render() {
        return (
            <div>
                <Route path="/" exact render={(props) => (
                     <WeatherConditions
                     conditions={this.state.conditions} 
                     conditionsDescription={this.state.conditionsDescription} 
                     temperature={this.state.temperature} 
                     feelsLike={this.state.feelsLike} 
                     uvi={this.state.uvi} 
                     humidity={this.state.humidity} 
                     umbrellaToday={this.state.umbrellaToday} 
                     jacketToday={this.state.jacketToday}
                 />
                )} />
                <Route path="/long-range" exact render={(props) => (
                    <LongRangeWeather />
                )}
                />
                
            </div>
        )
    }


    componentDidMount()  {

        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=43.4516&lon=-80.4925&units=metric&appid=31a4da5ead9b1633c81fc2dba65ddee9`)

        .then((res) => {
            console.log(res)
            console.log(this.state)

            let precipitation;

            for (let i = 0; i < (res.data.hourly.length - 36); i++)  {
                   if (res.data.hourly[i].pop >= 80)  {
                       precipitation = true
                   } 
                   if (res.data.hourly[i].pop < 80)  {
                       precipitation = false
                   }
               }

            this.setState({
                conditions : (res.data.current.weather[0].icon),
                conditionsDescription : (res.data.current.weather[0].description),
                temperature : Math.round(res.data.current.temp),
                feelsLike : Math.round(res.data.current.feels_like),
                uvi : Math.round(res.data.current.uvi),
                humidity : (res.data.current.humidity),
                sunTime : null,
                umbrellaToday : precipitation,
                jacketToday : null,
            
                tomorrowHighTemp : Math.round(res.data.daily[1].temp.max),
                tomorrowFeelsLike : Math.round(res.data.daily[1].feels_like.day),
                tomorrowConditions : (res.data.daily[1].weather[0].main),
              
                tomorrowNightLowTemp : Math.round(res.data.daily[1].temp.night),
                tomorrowNightFeelsLike : Math.round(res.data.daily[1].feels_like.night)
            })

            console.log(this.state)
        })
        .catch(err => console.log(err))

    }
}              

