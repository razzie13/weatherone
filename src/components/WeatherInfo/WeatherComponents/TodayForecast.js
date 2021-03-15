import React from 'react'

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
import { faThermometerEmpty} from '@fortawesome/free-solid-svg-icons'
import { faThermometerFull } from '@fortawesome/free-solid-svg-icons'


export default function TodayForecast(props) {

    // Create className from Temperature Value 

    let temperatureClassName

    if (props.maxValue < 39) {temperatureClassName = 'thirty-nine'}
    if (props.maxValue < 38) {temperatureClassName = 'thirty-eight'}
    if (props.maxValue < 37) {temperatureClassName = 'thirty-seven'}
    if (props.maxValue < 36) {temperatureClassName = 'thirty-six'}
    if (props.maxValue < 35) {temperatureClassName = 'thirty-five'}
    if (props.maxValue < 34) {temperatureClassName = 'thirty-four'}
    if (props.maxValue < 33) {temperatureClassName = 'thirty-three'}
    if (props.maxValue < 32) {temperatureClassName = 'thirty-two'}
    if (props.maxValue < 31) {temperatureClassName = 'thirty-one'}
    
    if (props.maxValue < 30) {temperatureClassName = 'thirty'}
    if (props.maxValue > 29) {temperatureClassName = 'twenty-nine'}
    if (props.maxValue < 28) {temperatureClassName = 'twenty-eight'}
    if (props.maxValue < 27) {temperatureClassName = 'twenty-seven'}
    if (props.maxValue < 26) {temperatureClassName = 'twenty-six'}
    if (props.maxValue < 25) {temperatureClassName = 'twenty-five'}
    if (props.maxValue < 24) {temperatureClassName = 'twenty-four'}
    if (props.maxValue < 23) {temperatureClassName = 'twenty-three'}
    if (props.maxValue < 22) {temperatureClassName = 'twenty-two'}
    if (props.maxValue < 21) {temperatureClassName = 'twenty-one'}
    
    if (props.maxValue < 20) {temperatureClassName = 'twenty'}
    if (props.maxValue < 19) {temperatureClassName = 'nineteen'}
    if (props.maxValue < 18) {temperatureClassName = 'eighteen'}
    if (props.maxValue < 17) {temperatureClassName = 'seventeen'}
    if (props.maxValue < 16) {temperatureClassName = 'sixteen'}
    if (props.maxValue < 15) {temperatureClassName = 'fifteen'}
    if (props.maxValue < 14) {temperatureClassName = 'fourteen'}
    if (props.maxValue < 13) {temperatureClassName = 'thirteen'}
    if (props.maxValue < 12) {temperatureClassName = 'twelve'}
    if (props.maxValue < 11) {temperatureClassName = 'eleven'}
    if (props.maxValue < 10) {temperatureClassName = 'ten'}

    if (props.maxValue < 9) {temperatureClassName = 'nine'}
    if (props.maxValue < 8) {temperatureClassName = 'eight'}
    if (props.maxValue < 7) {temperatureClassName = 'seven'}
    if (props.maxValue < 6) {temperatureClassName = 'six'}
    if (props.maxValue < 5) {temperatureClassName = 'five'}
    if (props.maxValue < 4) {temperatureClassName = 'four'}
    if (props.maxValue < 3) {temperatureClassName = 'three'}
    if (props.maxValue < 2) {temperatureClassName = 'two'}
    if (props.maxValue < 1) {temperatureClassName = 'one'}
    if (props.maxValue < 0) {temperatureClassName = 'zero'}

    if (props.maxValue < -1) {temperatureClassName = 'minus-'}
    if (props.maxValue < -2) {temperatureClassName = 'minus-'}
    if (props.maxValue < -3) {temperatureClassName = 'minus-'}
    if (props.maxValue < -4) {temperatureClassName = 'minus-'}
    if (props.maxValue < -5) {temperatureClassName = 'minus-'}
    if (props.maxValue < -6) {temperatureClassName = 'minus-'}
    if (props.maxValue < -7) {temperatureClassName = 'minus-'}
    if (props.maxValue < -8) {temperatureClassName = 'minus-'}
    if (props.maxValue < -9) {temperatureClassName = 'minus-'}
    if (props.maxValue < -10) {temperatureClassName = 'minus-'}

    if (props.maxValue < -11) {temperatureClassName = 'minus-'}
    if (props.maxValue < -12) {temperatureClassName = 'minus-'}
    if (props.maxValue < -13) {temperatureClassName = 'minus-'}
    if (props.maxValue < -14) {temperatureClassName = 'minus-'}
    if (props.maxValue < -15) {temperatureClassName = 'minus-'}
    if (props.maxValue < -16) {temperatureClassName = 'minus-'}
    if (props.maxValue < -17) {temperatureClassName = 'minus-'}
    if (props.maxValue < -18) {temperatureClassName = 'minus-'}
    if (props.maxValue < -19) {temperatureClassName = 'minus-'}
    if (props.maxValue < -20) {temperatureClassName = 'minus-'}

    if (props.maxValue < -21) {temperatureClassName = 'minus-'}
    if (props.maxValue < -22) {temperatureClassName = 'minus-'}
    if (props.maxValue < -23) {temperatureClassName = 'thirty-eight'}
    if (props.maxValue < -24) {temperatureClassName = 'thirty-eight'}
    if (props.maxValue < -25) {temperatureClassName = 'thirty-eight'}
    if (props.maxValue < -26) {temperatureClassName = 'thirty-eight'}
    if (props.maxValue < -27) {temperatureClassName = 'thirty-eight'}
    if (props.maxValue < -28) {temperatureClassName = 'thirty-eight'}
    if (props.maxValue < -29) {temperatureClassName = 'thirty-eight'}
    if (props.maxValue < -30) {temperatureClassName = 'thirty-eight'}
    if (props.maxValue <= -31) {temperatureClassName = 'thirty-eight'}

    let uvClassName
    if (props.maxValue > 10) {uvClassName = 'extreme-uv'}
    if (props.maxValue < 10) {uvClassName = 'thirty-nine'}
    if (props.maxValue < 8) {uvClassName = 'twenty-seven'}
    if (props.maxValue < 6) {uvClassName = 'nineteen'}
    if (props.maxValue < 3) {uvClassName = 'seven'}


    let idClasses = [props.id]
    let classNameClasses = ['app-section-full-width', 'day-outlook', 'text-center', 
                                props.id === 'high-low' ? temperatureClassName : null ||
                                props.id === 'temp-feels-like' ? temperatureClassName : null ||
                                props.id === 'wind-info' ? 'rain-coming' : null ||
                                props.id === 'uv-index-today' ? uvClassName : null] 

    return (
        <div id={idClasses.join('')} className={classNameClasses.join(' ')}>

            {/* Conditionally Render Information  */}


            {/* {props.id === 'high-low' ? <h3>Wind Speed: {props.minValue} KM/H {props.maxValue}</h3> : null} */}

            {props.id === 'temp-feels-like' ? 
                    (props.maxValue > props.minValue ? <><FontAwesomeIcon icon={faThermometerFull} /><h3>Humidex: {props.maxValue}</h3></> : <><FontAwesomeIcon icon={faThermometerEmpty} /><h3>WindChill: {props.maxValue}</h3></>) : null
                    }

            {props.id === 'uv-index-today' ? <h3>UV Index: {props.maxValue}</h3> : null}

            {props.id === 'wind-info' ? <h3>Wind Speed: {props.minValue} KM/H {props.maxValue}</h3> : null}


            {/* Show FontAwesome Icon that coorelates with weather conditions code */}

            {
            props.id === "high-low" ? 
           
            (props.icon === '01d' ? <FontAwesomeIcon icon={faSun} /> : null) ||
            (props.icon === '02d' ? <FontAwesomeIcon icon={faCloudSun} /> : null) ||
            (props.icon === '03d' ? <FontAwesomeIcon icon={faCloudSun} /> : null) ||
            (props.icon === '04d' ? <FontAwesomeIcon icon={faCloud} /> : null) ||
            (props.icon === '09d' ? <FontAwesomeIcon icon={faCloudShowersHeavy} /> : null) ||
            (props.icon === '10d' ? <FontAwesomeIcon icon={faCloudRain} /> : null) ||
            (props.icon === '11d' ? <FontAwesomeIcon icon={faBolt} /> : null) ||
            (props.icon === '13d' ? <FontAwesomeIcon icon={faSnowflake} /> : null) ||
            (props.icon === '50d' ? <FontAwesomeIcon icon={faWater} /> : null) ||
            (props.icon === '01n' ? <FontAwesomeIcon icon={faMoon} /> : null) ||
            (props.icon === '04n' ? <FontAwesomeIcon icon={faCloudMoon} /> : null)

        

            : null 
            }



        </div>
    )
}
