import React from 'react'
import { v4 as uuidv4 } from 'uuid'
//import fromUnixTime from 'date-fns/fromUnixTime'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons'
import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'
import { faWater } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons'


export default function LongRangeForecast(props) {

    return (
        <>
            {props.longRangeData.slice(1).map((forecast) => (
             
            // <div key={uuidv4()} className={classNameClasses.join(' ')}>
            <div key={uuidv4()} 
                 className={['app-section-full-width', 'long-range-forecast', 

                 // Create className from Temperature Value
                 
                            
                 (forecast.temp.max > 39 ? 'thirty-nine' : null) ||
                 (forecast.temp.max > 38 ? 'thirty-eight' : null) ||
                 (forecast.temp.max > 37 ? 'thirty-seven' : null) ||
                 (forecast.temp.max > 36 ? 'thirty-six' : null) ||
                 (forecast.temp.max > 35 ? 'thirty-five' : null) ||
                 (forecast.temp.max > 34 ? 'thirty-four' : null) ||
                 (forecast.temp.max > 33 ? 'thirty-three' : null) ||
                 (forecast.temp.max > 32 ? 'thirty-two' : null) ||
                 (forecast.temp.max > 31 ? 'thirty-one' : null) ||
                 (forecast.temp.max > 30 ? 'thirty' : null) ||
                 (forecast.temp.max > 29 ? 'twenty-nine' : null) ||
                 (forecast.temp.max > 28 ? 'twenty-eight' : null) ||
                 (forecast.temp.max > 27 ? 'twenty-seven' : null) ||
                 (forecast.temp.max > 26 ? 'twenty-six' : null) ||
                 (forecast.temp.max > 25 ? 'twenty-five' : null) ||
                 (forecast.temp.max > 24 ? 'twenty-four' : null) ||
                 (forecast.temp.max > 23 ? 'twenty-three' : null) ||
                 (forecast.temp.max > 22 ? 'twenty-two' : null) ||
                 (forecast.temp.max > 21 ? 'twenty-one' : null) ||
                 (forecast.temp.max > 20 ? 'twenty' : null) ||
                 (forecast.temp.max > 19 ? 'nineteen' : null) ||
                 (forecast.temp.max > 18 ? 'eighteen' : null) ||
                 (forecast.temp.max > 17 ? 'seventeen' : null) ||
                 (forecast.temp.max > 16 ? 'sixteen' : null) ||
                 (forecast.temp.max > 15 ? 'fifteen' : null) ||
                 (forecast.temp.max > 14 ? 'fourteen' : null) ||
                 (forecast.temp.max > 13 ? 'thirteen' : null) ||
                 (forecast.temp.max > 12 ? 'twelve' : null) ||
                 (forecast.temp.max > 11 ? 'eleven' : null) ||
                 (forecast.temp.max > 10 ? 'ten' : null) ||

                 (forecast.temp.max > 9 ? 'nine' : null) ||
                 (forecast.temp.max > 8 ? 'eight' : null) ||
                 (forecast.temp.max > 7 ? 'seven' : null) ||
                 (forecast.temp.max > 6 ? 'six' : null) ||
                 (forecast.temp.max > 5 ? 'five' : null) ||
                 (forecast.temp.max > 4 ? 'four' : null) ||
                 (forecast.temp.max > 3 ? 'three' : null) ||
                 (forecast.temp.max > 2 ? 'two' : null) ||
                 (forecast.temp.max > 1 ? 'one' : null) ||
                 (forecast.temp.max > 0 ? 'zero' : null) ||

                 (forecast.temp.max > -1 ? 'minus-one' : null) ||
                 (forecast.temp.max > -2 ? 'minus-two' : null) ||
                 (forecast.temp.max > -3 ? 'minus-three' : null) ||
                 (forecast.temp.max > -4 ? 'minus-four' : null) ||
                 (forecast.temp.max > -5 ? 'minus-five' : null) ||
                 (forecast.temp.max > -6 ? 'minus-six' : null) ||
                 (forecast.temp.max > -7 ? 'minus-seven' : null) ||
                 (forecast.temp.max > -8 ? 'minus-eight' : null) ||
                 (forecast.temp.max > -9 ? 'minus-nine' : null) ||
                 (forecast.temp.max > -10 ? 'minus-ten' : null) ||

                 (forecast.temp.max > -11 ? 'minus-eleven' : null) ||
                 (forecast.temp.max > -12 ? 'minus-twelve' : null) ||
                 (forecast.temp.max > -13 ? 'minus-thirteen' : null) ||
                 (forecast.temp.max > -14 ? 'minus-fourteen' : null) ||
                 (forecast.temp.max > -15 ? 'minus-fifteen' : null) ||
                 (forecast.temp.max > -16 ? 'minus-sixteen' : null) ||
                 (forecast.temp.max > -17 ? 'minus-seventeen' : null) ||
                 (forecast.temp.max > -18 ? 'minus-eighteen' : null) ||
                 (forecast.temp.max > -19 ? 'minus-nineteen' : null) ||
                 (forecast.temp.max > -20 ? 'minus-twenty' : null) ||

                 (forecast.temp.max > -21 ? 'minus-twenty' : null) ||
                 (forecast.temp.max > -22 ? 'minus-twenty-one' : null) ||
                 (forecast.temp.max > -23 ? 'minus-twenty-two' : null) ||
                 (forecast.temp.max > -24 ? 'minus-twenty-three' : null) ||
                 (forecast.temp.max > -25 ? 'minus-twenty-four' : null) ||
                 (forecast.temp.max > -26 ? 'minus-twenty-five' : null) ||
                 (forecast.temp.max > -27 ? 'minus-twenty-six' : null) ||
                 (forecast.temp.max > -28 ? 'minus-twenty-seven' : null) ||
                 (forecast.temp.max > -29 ? 'minus-twenty-eight' : null) ||
                 (forecast.temp.max > -30 ? 'minus-twenty-nine' : null) ||
                 (forecast.temp.max <= -30 ? 'minus-thirty' : null)

                 ].join(' ')}>

                
                <div className="long-range-weather-weekday">
                    <h4>{forecast.dt}</h4>
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
                        (forecast.weather[0].icon === '50d' ? <FontAwesomeIcon icon={faWater} /> : null) ||
                        (forecast.weather[0].icon === '01n' ? <FontAwesomeIcon icon={faMoon} /> : null) ||
                        (forecast.weather[0].icon === '04n' ? <FontAwesomeIcon icon={faCloudMoon} /> : null)

                    }
                    </div>
                    <div className="long-range-weather-description">
                        <h3>{forecast.weather[0].description}</h3>
                    </div>
                    <div className="long-range-weather-temperature">
                        <h3>{Math.round(forecast.temp.max)}</h3>
                    </div>
                </div>
                        
            </div>


                
            ))}
            
        </>
        
    )
}
