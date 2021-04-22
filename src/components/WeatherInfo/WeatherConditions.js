import React from 'react'
import { v4 as uuidv4 } from 'uuid'


import CurrentWeather from './WeatherComponents/CurrentWeather'
import DayAtAGlance from './WeatherComponents/DayAtAGlance'
import TodayForecast from './WeatherComponents/TodayForecast'

export default function WeatherConditions(props) {

    let cssStyles = ['app-section-full-width', 'day-outlook', 'text-center'].join(' ')

    return (
        <div key={uuidv4()}>
            <div key={uuidv4()} className="app-section-half-width-container">
                <CurrentWeather key={uuidv4()} id="conditions" value={props.data.data.current.weather[0].icon} description={props.data.data.current.weather[0].description}/>
                <CurrentWeather key={uuidv4()} id="temperature" value={props.data.data.current.temp.toFixed(0)} description={props.data.data.current.feels_like.toFixed(0)}/>
            </div>

            <div key={uuidv4()} className="app-section-full-width"><h3>Your {Date.now() > props.todaySunsetTime * 1000 ? "Night" : "Day"} at a Glance:</h3></div> 
                <DayAtAGlance key={uuidv4()} name={'jacket'} styling={[cssStyles, props.data.data.daily[0].temp.max > 16 ? 'jacket-no-need' : 'jacket-need'].join(' ')} info={props.data.data.daily[0].temp.max}/>
                <DayAtAGlance key={uuidv4()} name={'umbrella'} styling={[cssStyles, props.data.data.daily[0].pop > 0.7 ? 'rain-coming' : 'no-rain-coming'].join(' ')} info={props.data.data.daily[0].pop}/>
                {props.temperature > 21 || ((props.data.data.current.weather[0].icon === '01d' || props.data.data.current.weather[0].icon === '02d') && props.data.data.daily[0].temp.max > 18) ?
                    <DayAtAGlance key={uuidv4()} name={'sandals'} styling={"app-section-full-width day-outlook text-center twenty-two"} info={props.data.data.daily[0].temp.max}/> :
                    null}


            {Date.now() < props.data.data.daily[0].sunset * 1000 ?
                <>
                <div className="app-section-full-width"><h3>Today's Forecast:</h3></div>   

                <TodayForecast key={uuidv4()} id="high-low" styling={"app-section-full-width day-outlook text-center jacket-no-need"} icon={props.data.data.daily[0].weather[0].icon} maxValue={props.data.data.daily[0].temp.day.toFixed(0)} minValue={props.data.data.daily[0].temp.night.toFixed(0)}/>
                <TodayForecast key={uuidv4()} id="temp-feels-like" styling={"app-section-full-width day-outlook text-center jacket-no-need"} icon={null} maxValue={props.data.data.daily[0].feels_like.day.toFixed(0)} minValue={props.data.data.daily[0].temp.day.toFixed(0)} />
                <TodayForecast key={uuidv4()} id="wind-info" styling={"app-section-full-width day-outlook text-center jacket-no-need"} icon='wind-icon' maxValue={props.data.data.daily[0].wind_deg} minValue={props.data.data.daily[0].wind_speed.toFixed(0)} />
                
                
                <TodayForecast key={uuidv4()} id="uv-index-today" styling={"app-section-full-width day-outlook text-center jacket-no-need"} icon='uv-icon' maxValue={props.data.data.daily[0].uvi.toFixed(0)} minValue={null} />
                
                <TodayForecast key={uuidv4()} id="sunset-time" styling={"app-section-full-width day-outlook text-center jacket-no-need"} icon={null} maxValue={props.data.data.daily[0].sunrise * 1000 } minValue={props.data.data.daily[0].sunset * 1000 } />
                </> 
                 : 
                 <>
                 <div className="app-section-full-width"><h3>Tonight's Forecast:</h3></div>
                 {Date.now() > props.todaySunsetTime * 1000 ? null :
                    <TodayForecast key={uuidv4()} id="sunset-time" styling={"app-section-full-width day-outlook text-center jacket-no-need"} icon={null} maxValue={props.data.data.daily[0].sunrise} minValue={props.data.data.daily[0].sunset} /> }
                 <TodayForecast key={uuidv4()} id="overnight-low" styling={'app-section-full-width day-outlook text-center overnight-temps'} icon={null} maxValue={props.data.data.daily[0].temp.night.toFixed(0)} minValue={null}/>
                 </>
            }

        </div>
    )
}

