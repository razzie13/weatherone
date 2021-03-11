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


export default function GetWeatherDataCurrent(props) {


    // Create className from Temperature Value 

    let temperatureClassName

    if (props.value < 50)   {temperatureClassName = 'fourties'}
    if (props.value < 40)   {temperatureClassName = 'thirties'}
    if (props.value < 30)   {temperatureClassName = 'twenties'}
    if (props.value < 20)   {temperatureClassName = 'tens'}
    if (props.value < 10)   {temperatureClassName = 'singledigits'}
    if (props.value <  0)   {temperatureClassName = 'minussingledigits'}
    if (props.value < -10)  {temperatureClassName = 'minusteens'}
    if (props.value < -20)  {temperatureClassName = 'minustwenties'}
    if (props.value < -30)  {temperatureClassName = 'minusthirties'}




    let idClasses = ['current-', props.id]

    let classNameClasses = ['app-section-half-width', props.id === 'temperature' ? temperatureClassName : null]

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
            (props.value === '01n' ? <FontAwesomeIcon icon={faMoon} /> : null)

            : null}

            {/* Add Percent Sign to Humidity Value, Disallow Weather Condition Code Rendering */}
            
            {props.id === 'humidity' ? props.value + '%' : (props.id === 'conditions' ? null : props.value)}
            <div className="app-section-data-bottom"><span>{props.id === "temperature" ? 'feels like: ' + props.description : props.description}</span></div>
        </div>
    )
}
