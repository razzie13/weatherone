import React, { Component } from 'react'
import axios from 'axios'

import WeatherConditions from './WeatherConditions'
import LongRangeForecast from './WeatherComponents/LongRangeForecast'

export default class WeatherMain extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            rightNow: true,

            conditions : null,
            conditionsDescription : null,
            temperature : null,
            feelsLike : null,
            uvi : null,
            humidity : null,
            sunTime : null,
            umbrellaToday : null,
            jacketToday : null,

            longRangeData: []

            // longRangeData: [

            //     {
            //         day : 1,
            //         dayName: null,
            //         weatherIcon: null,
            //         highTemp: null
            //     },
            //     {
            //         day : 2,
            //         dayName: null,
            //         weatherIcon: null,
            //         highTemp: null
            //     },
            //     {
            //         day : 3,
            //         dayName: null,
            //         weatherIcon: null,
            //         highTemp: null
            //     },
            //     {
            //         day : 4,
            //         dayName: null,
            //         weatherIcon: null,
            //         highTemp: null
            //     },
            //     {
            //         day : 5,
            //         dayName: null,
            //         weatherIcon: null,
            //         highTemp: null
            //     },

            // ]
        
            // dayOneDayName: null,
            // dayOneWeatherIcon: null,
            // dayOneConditions : null,
            // dayOneHighTemp : null,
          
            // dayTwoDayName: null,
            // dayTwoWeatherIcon: null,
            // dayTwoConditions : null,
            // dayTwoHighTemp : null,

            // dayThreeDayName: null,
            // dayThreeWeatherIcon: null,
            // dayThreeConditions : null,
            // dayThreeHighTemp : null,

            // dayFourDayName: null,
            // dayFourWeatherIcon: null,
            // dayFourConditions : null,
            // dayFourHighTemp : null,

            // dayFiveDayName: null,
            // dayFiveWeatherIcon: null,
            // dayFiveConditions : null,
            // dayFiveHighTemp : null
                  
        }

        this.showLongRangeForecast = this.showLongRangeForecast.bind(this);
        this.showCurrentConditions = this.showCurrentConditions.bind(this);
    }

    showLongRangeForecast = () => {
        this.setState({ rightNow: false })
    }

    showCurrentConditions = () => {
        this.setState({ rightNow: true })
    }
    
    

    render() {
        return (
            <div>
                <div className="app-section-full-width right-now-long-range"><h3 className={this.state.rightNow ? 'active' : 'inactive'} onClick={this.showCurrentConditions}>Right Now:</h3><h3 className={this.state.rightNow ? 'inactive' : 'active'} onClick={this.showLongRangeForecast}>Long Range</h3></div>
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
                    : 
                        <LongRangeForecast
                        longRangeData={this.state.longRangeData}
                        />
                    
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

                // Long Range Forecast Component

                longRangeData: res.data.daily
            })

            console.log(this.state)
        })
        .catch(err => console.log(err))

    }
}              

