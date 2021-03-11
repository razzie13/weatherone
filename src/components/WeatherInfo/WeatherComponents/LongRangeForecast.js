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
                            
                 (forecast.temp.max > 50 ? 'fourties' : null) ||
                 (forecast.temp.max > 40 ? 'thirties' : null) ||
                 (forecast.temp.max > 30 ? 'twenties' : null) ||
                 (forecast.temp.max > 20 ? 'tens' : null) ||
                 (forecast.temp.max > 10 ? 'singledigits' : null) ||
                 (forecast.temp.max >  0 ? 'minussingledigits' : null) ||
                 (forecast.temp.max > -10 ? 'minusteens' : null) ||
                 (forecast.temp.max > -20 ? 'minustwenties' : null) ||
                 (forecast.temp.max > -30 ? 'minusthirties' : null)
                            
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
