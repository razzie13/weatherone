import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCloudSun, faCloud, faCloudShowersHeavy, faCloudRain, faBolt, faSnowflake, faWater, faMoon, faCloudMoon } from '@fortawesome/free-solid-svg-icons'

export default function GetWeatherDataCurrent(props) {

    // Create className from Temperature Value 

    let temperatureClassName

    if (props.value < 39) {temperatureClassName = 'thirty-nine'}
    if (props.value < 38) {temperatureClassName = 'thirty-eight'}
    if (props.value < 37) {temperatureClassName = 'thirty-seven'}
    if (props.value < 36) {temperatureClassName = 'thirty-six'}
    if (props.value < 35) {temperatureClassName = 'thirty-five'}
    if (props.value < 34) {temperatureClassName = 'thirty-four'}
    if (props.value < 33) {temperatureClassName = 'thirty-three'}
    if (props.value < 32) {temperatureClassName = 'thirty-two'}
    if (props.value < 31) {temperatureClassName = 'thirty-one'}
    
    if (props.value < 30) {temperatureClassName = 'thirty'}
    if (props.value < 29) {temperatureClassName = 'twenty-nine'}
    if (props.value < 28) {temperatureClassName = 'twenty-eight'}
    if (props.value < 27) {temperatureClassName = 'twenty-seven'}
    if (props.value < 26) {temperatureClassName = 'twenty-six'}
    if (props.value < 25) {temperatureClassName = 'twenty-five'}
    if (props.value < 24) {temperatureClassName = 'twenty-four'}
    if (props.value < 23) {temperatureClassName = 'twenty-three'}
    if (props.value < 22) {temperatureClassName = 'twenty-two'}
    if (props.value < 21) {temperatureClassName = 'twenty-one'}
    
    if (props.value < 20) {temperatureClassName = 'twenty'}
    if (props.value < 19) {temperatureClassName = 'nineteen'}
    if (props.value < 18) {temperatureClassName = 'eighteen'}
    if (props.value < 17) {temperatureClassName = 'seventeen'}
    if (props.value < 16) {temperatureClassName = 'sixteen'}
    if (props.value < 15) {temperatureClassName = 'fifteen'}
    if (props.value < 14) {temperatureClassName = 'fourteen'}
    if (props.value < 13) {temperatureClassName = 'thirteen'}
    if (props.value < 12) {temperatureClassName = 'twelve'}
    if (props.value < 11) {temperatureClassName = 'eleven'}
    if (props.value < 10) {temperatureClassName = 'ten'}

    if (props.value < 9) {temperatureClassName = 'nine'}
    if (props.value < 8) {temperatureClassName = 'eight'}
    if (props.value < 7) {temperatureClassName = 'seven'}
    if (props.value < 6) {temperatureClassName = 'six'}
    if (props.value < 5) {temperatureClassName = 'five'}
    if (props.value < 4) {temperatureClassName = 'four'}
    if (props.value < 3) {temperatureClassName = 'three'}
    if (props.value < 2) {temperatureClassName = 'two'}
    if (props.value < 1) {temperatureClassName = 'one'}
    if (props.value < 0) {temperatureClassName = 'zero'}

    if (props.value < -1) {temperatureClassName = 'minus-one'}
    if (props.value < -2) {temperatureClassName = 'minus-two'}
    if (props.value < -3) {temperatureClassName = 'minus-three'}
    if (props.value < -4) {temperatureClassName = 'minus-four'}
    if (props.value < -5) {temperatureClassName = 'minus-five'}
    if (props.value < -6) {temperatureClassName = 'minus-six'}
    if (props.value < -7) {temperatureClassName = 'minus-seven'}
    if (props.value < -8) {temperatureClassName = 'minus-eight'}
    if (props.value < -9) {temperatureClassName = 'minus-nine'}
    if (props.value < -10) {temperatureClassName = 'minus-ten'}

    if (props.value < -11) {temperatureClassName = 'minus-eleven'}
    if (props.value < -12) {temperatureClassName = 'minus-twelve'}
    if (props.value < -13) {temperatureClassName = 'minus-thirteen'}
    if (props.value < -14) {temperatureClassName = 'minus-fourteen'}
    if (props.value < -15) {temperatureClassName = 'minus-fifteen'}
    if (props.value < -16) {temperatureClassName = 'minus-sixteen'}
    if (props.value < -17) {temperatureClassName = 'minus-seventeen'}
    if (props.value < -18) {temperatureClassName = 'minus-eighteen'}
    if (props.value < -19) {temperatureClassName = 'minus-nineteen'}
    if (props.value < -20) {temperatureClassName = 'minus-twenty'}

    if (props.value < -21) {temperatureClassName = 'minus-twenty-one'}
    if (props.value < -22) {temperatureClassName = 'minus-twenty-two'}
    if (props.value < -23) {temperatureClassName = 'minus-twenty-three'}
    if (props.value < -24) {temperatureClassName = 'minus-twenty-four'}
    if (props.value < -25) {temperatureClassName = 'minus-twenty-five'}
    if (props.value < -26) {temperatureClassName = 'minus-twenty-six'}
    if (props.value < -27) {temperatureClassName = 'minus-twenty-seven'}
    if (props.value < -28) {temperatureClassName = 'minus-twenty-eight'}
    if (props.value < -29) {temperatureClassName = 'minus-twenty-nine'}
    if (props.value < -30) {temperatureClassName = 'minus-thirty'}
    if (props.value <= -31) {temperatureClassName = 'minus-thirty'}

    let uvClassName
    if (props.value > 10) {uvClassName = 'extreme-uv'}
    if (props.value < 10) {uvClassName = 'thirty-nine'}
    if (props.value < 8) {uvClassName = 'twenty-seven'}
    if (props.value < 6) {uvClassName = 'nineteen'}
    if (props.value < 3) {uvClassName = 'seven'}


    let idClasses = ['current-', props.id]
    let classNameClasses = ['app-section-half-width', props.id === 'uv-index' ? uvClassName : null || props.id === 'temperature' ? temperatureClassName : null]

    return (
        <div id={idClasses.join('')} className={classNameClasses.join(' ')}>
            <div className="app-section-data-top">
                <span>{props.id}</span>
            </div>

            {/* Conditionally Render Precipitation Information  */}

            {props.name === 'umbrella' ? (props.info ? <h3>Pack Your Umbrella</h3> : <h3>No Umbrella Needed</h3>) : null}


            {/* Show FontAwesome Icon that coorelates with weather conditions code */}

            {props.id === "conditions" ? 
            (props.value === '01d' ? <FontAwesomeIcon icon={faSun} /> : null) ||
            (props.value === '02d' ? <FontAwesomeIcon icon={faCloudSun} /> : null) ||
            (props.value === '03d' ? <FontAwesomeIcon icon={faCloudSun} /> : null) ||
            (props.value === '04d' ? <FontAwesomeIcon icon={faCloud} /> : null) ||
            (props.value === '09d' ? <FontAwesomeIcon icon={faCloudShowersHeavy} /> : null) ||
            (props.value === '10d' ? <FontAwesomeIcon icon={faCloudRain} /> : null) ||
            (props.value === '11d' ? <FontAwesomeIcon icon={faBolt} /> : null) ||
            (props.value === '13d' ? <FontAwesomeIcon icon={faSnowflake} /> : null) ||
            (props.value === '50d' ? <FontAwesomeIcon icon={faWater} /> : null) ||
            (props.value === '01n' ? <FontAwesomeIcon icon={faMoon} /> : null) ||
            (props.value === '02n' ? <FontAwesomeIcon icon={faCloudMoon} /> : null) ||
            (props.value === '04n' ? <FontAwesomeIcon icon={faCloudMoon} /> : null)


            : null}

            {/* Add Percent Sign to Humidity Value, Disallow Weather Condition Code Rendering */}
            
            {props.id === 'humidity' ? props.value + '%' : (props.id === 'conditions' ? null : props.value)}
            <div className="app-section-data-bottom"><span>{props.id === "temperature" ? 'feels like: ' + props.description : props.description}</span></div>
        </div>
    )
}
