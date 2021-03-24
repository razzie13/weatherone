import React from 'react'
import { v4 as uuidv4 } from 'uuid'


import CurrentWeather from './WeatherComponents/CurrentWeather'
import DayAtAGlance from './WeatherComponents/DayAtAGlance'
import TodayForecast from './WeatherComponents/TodayForecast'

export default function WeatherConditions(props) {

    let cssStyles = ['app-section-full-width', 'day-outlook', 'text-center'].join(' ')

    return (
        <div key={uuidv4()}>
            <div className="app-section-half-width-container">
                <CurrentWeather key={uuidv4()} id="conditions" value={props.conditions} description={props.conditionsDescription}/>
                <CurrentWeather key={uuidv4()} id="temperature" value={props.temperature} description={props.feelsLike}/>
            </div>

            <div className="app-section-full-width"><h3>Your Day at a Glance:</h3></div> 
                <DayAtAGlance key={uuidv4()} name={'jacket'} styling={[cssStyles, props.temperature > 16 ? 'jacket-no-need' : 'jacket-need'].join(' ')} info={props.temperature}/>
                <DayAtAGlance key={uuidv4()} name={'umbrella'} styling={[cssStyles, props.umbrellaToday > 0.7 ? 'rain-coming' : 'no-rain-coming'].join(' ')} info={props.umbrellaToday}/>
                {props.temperature > 21 ?
                <DayAtAGlance key={uuidv4()} name={'sandals'} styling={"app-section-full-width day-outlook text-center twenty-two"} info={props.temperature}/> :
                null
            }


            {/* {Date.now() < props.todaySunsetTime ?  */}
                {/* <> */}
                <div className="app-section-full-width"><h3>Today's Forecast:</h3></div>   

                <TodayForecast key={uuidv4()} id="high-low" styling={"app-section-full-width day-outlook text-center jacket-no-need"} icon={props.todayWeatherIcon} maxValue={props.todayHigh} minValue={props.todayLow}/>
                <TodayForecast key={uuidv4()} id="temp-feels-like" styling={"app-section-full-width day-outlook text-center jacket-no-need"} icon={null} maxValue={props.todayFeelsLikeTemp} minValue={props.todayHigh} />
                <TodayForecast key={uuidv4()} id="wind-info" styling={"app-section-full-width day-outlook text-center jacket-no-need"} icon='wind-icon' maxValue={props.todayWindDirection} minValue={props.todayWindSpeed} />
                
                
                <TodayForecast key={uuidv4()} id="uv-index-today" styling={"app-section-full-width day-outlook text-center jacket-no-need"} icon='uv-icon' maxValue={props.todayUVHigh} minValue={null} />
                
                <TodayForecast key={uuidv4()} id="sunset-time" styling={"app-section-full-width day-outlook text-center jacket-no-need"} icon={null} maxValue={props.todaySunriseTime} minValue={props.todaySunsetTime} />
                {/* </> 
                 : 
                 <>
                 <div className="app-section-full-width"><h3>Tonight's Forecast:</h3></div>   
                 <TodayForecast key={uuidv4()} id="overnight-low" styling={[cssStyles, 'overnight-temps'].join(' ')} icon={null} maxValue={props.todayLow} minValue={null}/>
                 </>
            } */}

        </div>
    )
}

