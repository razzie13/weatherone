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
                <div className="app-section-full-width"><h3>Right Now:</h3></div>
                <div className="app-section-half-width-container">
                    <GetWeatherDataCurrent id="conditions" value={this.state.conditions} description={this.state.conditionsDescription}/>
                    <GetWeatherDataCurrent id="temperature" value={this.state.temperature} description={this.state.feelsLike}/>
                    <GetWeatherDataCurrent id="uv-index" value={this.state.uvi} description="High"/>
                    <GetWeatherDataCurrent id="humidity" value={this.state.humidity} description={null}/>
                </div>

                <div className="app-section-full-width"><h3>Your Day at a Glance:</h3></div>
                    <DayAtAGlance name={'alerts'} styling={"app-section-full-width text-center day-outlook no-weather-alerts"} info={null}/>
                    <DayAtAGlance name={'jacket'} styling={"app-section-full-width day-outlook text-center jacket-no-need"} info={this.state.temperature}/>
                    <DayAtAGlance name={'umbrella'} styling={"app-section-full-width day-outlook text-center rain-coming"} info={this.state.umbrellaToday}/>
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

