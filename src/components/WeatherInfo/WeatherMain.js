import React, { Component } from 'react'
import axios from 'axios'

import WeatherConditions from './WeatherConditions'
import HourlyForecast from './WeatherComponents/HourlyForecast'
import LongRangeForecast from './WeatherComponents/LongRangeForecast'

export default class WeatherMain extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            rightNow: true,
            hourlyForecast: false,
            longRangeForecast: false,

            conditions : null,
            conditionsDescription : null,
            temperature : null,
            feelsLike : null,
            uvi : null,
            humidity : null,
            sunTime : null,
            umbrellaToday : null,
            jacketToday : null,

            minuteData: [],

            hourlyData: [],
            longRangeData: []
        }

        this.showLongRangeForecast = this.showLongRangeForecast.bind(this);
        this.showCurrentConditions = this.showCurrentConditions.bind(this);
        this.showHourlyForecast = this.showHourlyForecast.bind(this);
    }

    showLongRangeForecast = () => {
        this.setState({ 
            rightNow: false,
            hourlyForecast: false,
            longRangeForecast: true
        });
    }

    showCurrentConditions = () => {
        this.setState({ 
            rightNow: true,
            hourlyForecast: false,
            longRangeForecast: false
        });
    }

    showHourlyForecast = () => {
        this.setState({ 
            rightNow: false,
            hourlyForecast: true,
            longRangeForecast: false
        });
    }
    
    
    render() {
        return (
            <div>
                <div className="app-section-full-width right-now-long-range">
                    <h3 className={this.state.rightNow ? 'active' : 'inactive'} onClick={this.showCurrentConditions}>Right Now</h3>
                    <h3 className={this.state.hourlyForecast ? 'active' : 'inactive'} onClick={this.showHourlyForecast}>Hourly</h3>
                    <h3 className={this.state.longRangeForecast ? 'active' : 'inactive'} onClick={this.showLongRangeForecast}>Long Range</h3></div>
                {this.state.rightNow ?
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
                    : null } 

                    {this.state.hourlyForecast ?
                        <HourlyForecast
                        minuteData={this.state.minuteData}
                        hourlyData={this.state.hourlyData}
                        />
                    : null}

                    {this.state.longRangeForecast ?
                        <LongRangeForecast
                        longRangeData={this.state.longRangeData}
                        />
                    : null  
                }
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

                // Right Now Component 

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
                tomorrowNightFeelsLike : Math.round(res.data.daily[1].feels_like.night),

                // Minute Data

                minuteData: res.data.minutely,

                // Hourly Forecast Component

                hourlyData: res.data.hourly,

                // Long Range Forecast Component

                longRangeData: res.data.daily
            })

            console.log(this.state)
        })
        .catch(err => console.log(err))

    }
}              

