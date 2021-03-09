import React from 'react'

import CurrentWeather from './WeatherComponents/CurrentWeather'
import DayAtAGlance from './WeatherComponents/DayAtAGlance'

export default function WeatherConditions(props) {
    return (
        <div>
            <div className="app-section-full-width"><h3>Right Now:</h3></div>
            <div className="app-section-half-width-container">
                <CurrentWeather id="conditions" value={props.conditions} description={props.conditionsDescription}/>
                <CurrentWeather id="temperature" value={props.temperature} description={props.feelsLike}/>
                <CurrentWeather id="uv-index" value={props.uvi} description="High"/>
                <CurrentWeather id="humidity" value={props.humidity} description={null}/>
            </div>

            <div className="app-section-full-width"><h3>Your Day at a Glance:</h3></div>
                <DayAtAGlance name={'alerts'} styling={"app-section-full-width text-center day-outlook no-weather-alerts"} info={null}/>
                <DayAtAGlance name={'jacket'} styling={"app-section-full-width day-outlook text-center jacket-no-need"} info={props.temperature}/>
                <DayAtAGlance name={'umbrella'} styling={"app-section-full-width day-outlook text-center rain-coming"} info={props.umbrellaToday}/>
        </div>
    )
}

