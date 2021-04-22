import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCloudSun , faCloud, faCloudShowersHeavy, faCloudRain, faBolt, faSnowflake, faWater, faMoon, faCloudMoon, faCloudMoonRain } from '@fortawesome/free-solid-svg-icons'

import MinuteForecast from './MinuteForecast'


export default function HourlyForecast(props) {    

    return (
        <>
            <MinuteForecast data={props.data} />

            {props.data.data.hourly.slice(1).map((forecast) => (

            <div key={uuidv4()} className={['app-section-full-width', 'long-range-forecast', 

                 // Create className from Temperature Value
                 
                 (forecast.temp > 39 ? 'thirty-nine' : null) ||
                 (forecast.temp > 38 ? 'thirty-eight' : null) ||
                 (forecast.temp > 37 ? 'thirty-seven' : null) ||
                 (forecast.temp > 36 ? 'thirty-six' : null) ||
                 (forecast.temp > 35 ? 'thirty-five' : null) ||
                 (forecast.temp > 34 ? 'thirty-four' : null) ||
                 (forecast.temp > 33 ? 'thirty-three' : null) ||
                 (forecast.temp > 32 ? 'thirty-two' : null) ||
                 (forecast.temp > 31 ? 'thirty-one' : null) ||
                 
                 (forecast.temp > 30 ? 'thirty' : null) ||
                 (forecast.temp > 29 ? 'twenty-nine' : null) ||
                 (forecast.temp > 28 ? 'twenty-eight' : null) ||
                 (forecast.temp > 27 ? 'twenty-seven' : null) ||
                 (forecast.temp > 26 ? 'twenty-six' : null) ||
                 (forecast.temp > 25 ? 'twenty-five' : null) ||
                 (forecast.temp > 24 ? 'twenty-four' : null) ||
                 (forecast.temp > 23 ? 'twenty-three' : null) ||
                 (forecast.temp > 22 ? 'twenty-two' : null) ||
                 (forecast.temp > 21 ? 'twenty-one' : null) ||
                 
                 (forecast.temp > 20 ? 'twenty' : null) ||
                 (forecast.temp > 19 ? 'nineteen' : null) ||
                 (forecast.temp > 18 ? 'eighteen' : null) ||
                 (forecast.temp > 17 ? 'seventeen' : null) ||
                 (forecast.temp > 16 ? 'sixteen' : null) ||
                 (forecast.temp > 15 ? 'fifteen' : null) ||
                 (forecast.temp > 14 ? 'fourteen' : null) ||
                 (forecast.temp > 13 ? 'thirteen' : null) ||
                 (forecast.temp > 12 ? 'twelve' : null) ||
                 (forecast.temp > 11 ? 'eleven' : null) ||
                 (forecast.temp > 10 ? 'ten' : null) ||

                 (forecast.temp > 9 ? 'nine' : null) ||
                 (forecast.temp > 8 ? 'eight' : null) ||
                 (forecast.temp > 7 ? 'seven' : null) ||
                 (forecast.temp > 6 ? 'six' : null) ||
                 (forecast.temp > 5 ? 'five' : null) ||
                 (forecast.temp > 4 ? 'four' : null) ||
                 (forecast.temp > 3 ? 'three' : null) ||
                 (forecast.temp > 2 ? 'two' : null) ||
                 (forecast.temp > 1 ? 'one' : null) ||
                 (forecast.temp > 0 ? 'zero' : null) ||

                 (forecast.temp > -1 ? 'minus-one' : null) ||
                 (forecast.temp > -2 ? 'minus-two' : null) ||
                 (forecast.temp > -3 ? 'minus-three' : null) ||
                 (forecast.temp > -4 ? 'minus-four' : null) ||
                 (forecast.temp > -5 ? 'minus-five' : null) ||
                 (forecast.temp > -6 ? 'minus-six' : null) ||
                 (forecast.temp > -7 ? 'minus-seven' : null) ||
                 (forecast.temp > -8 ? 'minus-eight' : null) ||
                 (forecast.temp > -9 ? 'minus-nine' : null) ||
                 (forecast.temp > -10 ? 'minus-ten' : null) ||

                 (forecast.temp > -11 ? 'minus-eleven' : null) ||
                 (forecast.temp > -12 ? 'minus-twelve' : null) ||
                 (forecast.temp > -13 ? 'minus-thirteen' : null) ||
                 (forecast.temp > -14 ? 'minus-fourteen' : null) ||
                 (forecast.temp > -15 ? 'minus-fifteen' : null) ||
                 (forecast.temp > -16 ? 'minus-sixteen' : null) ||
                 (forecast.temp > -17 ? 'minus-seventeen' : null) ||
                 (forecast.temp > -18 ? 'minus-eighteen' : null) ||
                 (forecast.temp > -19 ? 'minus-nineteen' : null) ||
                 (forecast.temp > -20 ? 'minus-twenty' : null) ||

                 (forecast.temp > -21 ? 'minus-twenty' : null) ||
                 (forecast.temp > -22 ? 'minus-twenty-one' : null) ||
                 (forecast.temp > -23 ? 'minus-twenty-two' : null) ||
                 (forecast.temp > -24 ? 'minus-twenty-three' : null) ||
                 (forecast.temp > -25 ? 'minus-twenty-four' : null) ||
                 (forecast.temp > -26 ? 'minus-twenty-five' : null) ||
                 (forecast.temp > -27 ? 'minus-twenty-six' : null) ||
                 (forecast.temp > -28 ? 'minus-twenty-seven' : null) ||
                 (forecast.temp > -29 ? 'minus-twenty-eight' : null) ||
                 (forecast.temp > -30 ? 'minus-twenty-nine' : null) ||
                 (forecast.temp <= -30 ? 'minus-thirty' : null)

                 ].join(' ')}>

                
                <div className="long-range-weather-weekday">
                    <h4>{new Date(forecast.dt * 1000).toLocaleDateString('en-us', {  weekday: 'long' , hour: 'numeric'}).replace(',', ' ')}</h4>
                </div>
                <div className="long-range-weather-info">
                    <div className="long-range-weather-icon">
                    {    
                        (forecast.weather[0].icon === '01d' ? <FontAwesomeIcon icon={faSun} /> : null) ||
                        (forecast.weather[0].icon === '02d' ? <FontAwesomeIcon icon={faCloudSun} /> : null) ||
                        (forecast.weather[0].icon === '03d' ? <FontAwesomeIcon icon={faCloudSun} /> : null) ||
                        (forecast.weather[0].icon === '04d' ? <FontAwesomeIcon icon={faCloud} /> : null) ||
                        (forecast.weather[0].icon === '09d' ? <FontAwesomeIcon icon={faCloudShowersHeavy} /> : null) ||
                        (forecast.weather[0].icon === '10d' ? <FontAwesomeIcon icon={faCloudRain} /> : null) ||
                        (forecast.weather[0].icon === '11d' ? <FontAwesomeIcon icon={faBolt} /> : null) ||
                        (forecast.weather[0].icon === '13d' ? <FontAwesomeIcon icon={faSnowflake} /> : null) ||
                        (forecast.weather[0].icon === '13n' ? <FontAwesomeIcon icon={faSnowflake} /> : null) ||
                        (forecast.weather[0].icon === '50d' ? <FontAwesomeIcon icon={faWater} /> : null) ||
                        (forecast.weather[0].icon === '10n' ? <FontAwesomeIcon icon={faCloudMoonRain} /> : null) ||
                        (forecast.weather[0].icon === '01n' ? <FontAwesomeIcon icon={faMoon} /> : null) ||
                        (forecast.weather[0].icon === '04n' ? <FontAwesomeIcon icon={faCloudMoon} /> : null) ||
                        (forecast.weather[0].icon === '03n' ? <FontAwesomeIcon icon={faCloud} /> : null) ||
                        (forecast.weather[0].icon === '13n' ? <FontAwesomeIcon icon={faSnowflake} /> : null) ||
                        (forecast.weather[0].icon === '02n' ? <FontAwesomeIcon icon={faCloud} /> : null) 



                    }
                    </div>
                    <div className="long-range-weather-description">
                        <h3>{forecast.weather[0].description}</h3>
                    </div>
                    <div className="long-range-weather-temperature">
                        <h3>{Math.round(forecast.temp)}</h3>
                    </div>
                </div>      
            </div>
            ))}
        </>
    )
}
