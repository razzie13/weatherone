import React from 'react'



import CurrentWeather from './WeatherComponents/CurrentWeather'
import DayAtAGlance from './WeatherComponents/DayAtAGlance'
import TodayForecast from './WeatherComponents/TodayForecast'

export default function WeatherConditions(props) {
    return (
        <div>
            <div className="app-section-half-width-container">
                <CurrentWeather id="conditions" value={props.conditions} description={props.conditionsDescription}/>
                <CurrentWeather id="temperature" value={props.temperature} description={props.feelsLike}/>
            </div>

            <div className="app-section-full-width"><h3>Your Day at a Glance:</h3></div>   
                <DayAtAGlance name={'jacket'} styling={"app-section-full-width day-outlook text-center jacket-no-need"} info={props.temperature}/>
                <DayAtAGlance name={'umbrella'} styling={"app-section-full-width day-outlook text-center rain-coming"} info={props.umbrellaToday}/>

            <div className="app-section-full-width"><h3>Today's Forecast:</h3></div>   
                <TodayForecast id="high-low" styling={"app-section-full-width day-outlook text-center jacket-no-need"} icon={props.todayWeatherIcon} maxValue={props.todayHigh} minValue={props.todayLow}/>
                <TodayForecast id="temp-feels-like" styling={"app-section-full-width day-outlook text-center jacket-no-need"} icon={null} maxValue={props.todayFeelsLikeTemp} minValue={props.todayHigh} />
                <TodayForecast id="wind-info" styling={"app-section-full-width day-outlook text-center jacket-no-need"} icon='wind-icon' maxValue={props.todayWindDirection} minValue={props.todayWindSpeed} />
                <TodayForecast id="uv-index-today" styling={"app-section-full-width day-outlook text-center jacket-no-need"} icon='uv-icon' maxValue={props.todayUVHigh} minValue={null} />
                <TodayForecast id="sunset-time" styling={"app-section-full-width day-outlook text-center jacket-no-need"} icon={null} maxValue={props.todaySunriseTime} minValue={props.todaySunsetTime} />

        </div>
    )
}

