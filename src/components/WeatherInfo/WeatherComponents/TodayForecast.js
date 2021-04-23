import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCloudSun , faCloud, faCloudShowersHeavy, faCloudRain, faBolt, faSnowflake, faWater, faMoon, faCloudMoon, faThermometerEmpty, faThermometerFull, faGlasses, faWind } from '@fortawesome/free-solid-svg-icons'


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

    if (props.maxValue < -1) {temperatureClassName = 'minus-one'}
    if (props.maxValue < -2) {temperatureClassName = 'minus-two'}
    if (props.maxValue < -3) {temperatureClassName = 'minus-three'}
    if (props.maxValue < -4) {temperatureClassName = 'minus-four'}
    if (props.maxValue < -5) {temperatureClassName = 'minus-five'}
    if (props.maxValue < -6) {temperatureClassName = 'minus-six'}
    if (props.maxValue < -7) {temperatureClassName = 'minus-seven'}
    if (props.maxValue < -8) {temperatureClassName = 'minus-eight'}
    if (props.maxValue < -9) {temperatureClassName = 'minus-nine'}
    if (props.maxValue < -10) {temperatureClassName = 'minus-ten'}

    if (props.maxValue < -11) {temperatureClassName = 'minus-eleven'}
    if (props.maxValue < -12) {temperatureClassName = 'minus-twelve'}
    if (props.maxValue < -13) {temperatureClassName = 'minus-thirteen'}
    if (props.maxValue < -14) {temperatureClassName = 'minus-fourteen'}
    if (props.maxValue < -15) {temperatureClassName = 'minus-fifteen'}
    if (props.maxValue < -16) {temperatureClassName = 'minus-sixteen'}
    if (props.maxValue < -17) {temperatureClassName = 'minus-seventeen'}
    if (props.maxValue < -18) {temperatureClassName = 'minus-eighteen'}
    if (props.maxValue < -19) {temperatureClassName = 'minus-nineteen'}
    if (props.maxValue < -20) {temperatureClassName = 'minus-twenty'}

    if (props.maxValue < -21) {temperatureClassName = 'minus-twenty-one'}
    if (props.maxValue < -22) {temperatureClassName = 'minus-twenty-two'}
    if (props.maxValue < -23) {temperatureClassName = 'minus-twenty-three'}
    if (props.maxValue < -24) {temperatureClassName = 'minus-twenty-four'}
    if (props.maxValue < -25) {temperatureClassName = 'minus-twenty-five'}
    if (props.maxValue < -26) {temperatureClassName = 'minus-twenty-six'}
    if (props.maxValue < -27) {temperatureClassName = 'minus-twenty-seven'}
    if (props.maxValue < -28) {temperatureClassName = 'minus-twenty-eight'}
    if (props.maxValue < -29) {temperatureClassName = 'minus-twenty-nine'}
    if (props.maxValue < -30) {temperatureClassName = 'minus-thirty'}
    if (props.maxValue <= -31) {temperatureClassName = 'minus-thirty'}

    let uvClassName
    if (props.maxValue > 10) {uvClassName = 'extreme-uv'}
    if (props.maxValue < 10) {uvClassName = 'thirty-nine'}
    if (props.maxValue < 8) {uvClassName = 'twenty-seven'}
    if (props.maxValue < 6) {uvClassName = 'nineteen'}
    if (props.maxValue < 3) {uvClassName = 'seven'}

    // wind direction from directional degree props

    var deg = Math.floor(props.maxValue);
    switch (true) {
        case deg >= 360 && deg <= 21:
        deg = "N";
        break;
        case deg >= 22 && deg <= 44:
        deg = "NNE";
        break;
        case deg >= 45 && deg <= 66:
        deg = "NE";
        break;
        case deg >= 67 && deg <= 89:
        deg = "ENE";
        break;
        case deg >= 90 && deg <= 111:
        deg = "E";
        break;
        case deg >= 112 && deg <= 134:
        deg = "ESE";
        break;
        case deg >= 135 && deg <= 156:
        deg = "SE";
        break;
        case deg >= 157 && deg <= 179:
        deg = "SSE";
        break;
        case deg >= 180 && deg <= 201:
        deg = "S";
        break;
        case deg >= 202 && deg <= 224:
        deg = "SSW";
        break;
        case deg >= 225 && deg <= 246:
        deg = "SW";
        break;
        case deg >= 247 && deg <= 269:
        deg = "WSW";
        break;
        case deg >= 270 && deg <= 291:
        deg = "W";
        break;
        case deg >= 292 && deg <= 314:
        deg = "WNW";
        break;
        case deg >= 315 && deg <= 336:
        deg = "NW";
        break;
        case deg >= 337 && deg <= 359:
        deg = "NNW";
        break;
        default:
        deg = "no data";
    }

    let idClasses = [props.id]
    let classNameClasses = ['app-section-full-width', 'day-outlook', 'text-center', 
                                props.id === 'high-low' ? temperatureClassName : null ||
                                props.id === 'temp-feels-like' ? temperatureClassName : null ||
                                props.id === 'wind-info' ? 'rain-coming' : null ||
                                props.id === 'uv-index-today' ? uvClassName : null,
                                props.id === 'sunset-time' ? '' : null,
                                props.id === 'overnight-low' ? 'overnight-temps' : null] 

    return (
        <div id={idClasses.join('')} className={classNameClasses.join(' ')}>

            {/* Conditionally Render Information  */}

            {props.id === 'temp-feels-like' ? 
                    (props.maxValue > props.minValue ? <><FontAwesomeIcon icon={faThermometerFull} /><h3>Humidex: {props.maxValue}&deg;</h3></> : <><FontAwesomeIcon icon={faThermometerEmpty} /><h3>Feels Like: {props.maxValue}&deg;</h3></>) : null
                    }

            {props.id === 'uv-index-today' ? <><FontAwesomeIcon icon={faGlasses} /><h3>UV Index: {props.maxValue}</h3></> : null}

            {props.id === 'overnight-low' ? <><FontAwesomeIcon icon={faMoon} /><h3>Low: {props.maxValue}&deg;</h3></> : null}


            {props.id === 'wind-info' ? <><FontAwesomeIcon icon={faWind} /><h3>Wind Speed: {props.minValue} KM/H {deg}</h3></> : null}

            {props.id === 'sunset-time' ? 
                (Date.now() > props.maxValue ?          
                    <>
                        <FontAwesomeIcon icon={faMoon}  /><h3>Sunset: {new Date(props.minValue * 1000).toLocaleTimeString('en-us', {hour: '2-digit', minute:'2-digit'})}</h3>
                    </>  
                    :    
                    <>
                        <><FontAwesomeIcon icon={faSun}  /><h3>{new Date(props.maxValue).toLocaleTimeString('en-us', {hour: '2-digit', minute:'2-digit'})}</h3></>
                        <><FontAwesomeIcon icon={faMoon} /><h3>{new Date(props.minValue).toLocaleTimeString('en-us', {hour: '2-digit', minute:'2-digit'})}</h3></>
                    </> 
                )
            : null}


            {/* Show FontAwesome Icon that coorelates with weather conditions code */}

            {
            props.id === "high-low" ? 
           
            [
            (props.icon === '01d' ? <FontAwesomeIcon key={uuidv4()} icon={faSun} /> : null) ||
            (props.icon === '02d' ? <FontAwesomeIcon key={uuidv4()} icon={faCloudSun} /> : null) ||
            (props.icon === '03d' ? <FontAwesomeIcon key={uuidv4()} icon={faCloudSun} /> : null) ||
            (props.icon === '04d' ? <FontAwesomeIcon key={uuidv4()} icon={faCloud} /> : null) ||
            (props.icon === '09d' ? <FontAwesomeIcon key={uuidv4()} icon={faCloudShowersHeavy} /> : null) ||
            (props.icon === '10d' ? <FontAwesomeIcon key={uuidv4()} icon={faCloudRain} /> : null) ||
            (props.icon === '11d' ? <FontAwesomeIcon key={uuidv4()} icon={faBolt} /> : null) ||
            (props.icon === '13d' ? <FontAwesomeIcon key={uuidv4()} icon={faSnowflake} /> : null) ||
            (props.icon === '50d' ? <FontAwesomeIcon key={uuidv4()} icon={faWater} /> : null) ||
            (props.icon === '01n' ? <FontAwesomeIcon key={uuidv4()} icon={faMoon} /> : null) ||
            (props.icon === '02n' ? <FontAwesomeIcon key={uuidv4()} icon={faCloudMoon} /> : null) ||
            (props.icon === '04n' ? <FontAwesomeIcon key={uuidv4()} icon={faCloudMoon} /> : null),
                <h3 key={uuidv4()}><span key={uuidv4()} className="high-temp">High: {props.maxValue}&deg; </span> <span key={uuidv4()} className="low-temp">Low: {props.minValue}&deg;</span></h3>
        
            ]
            : null 
            }
        </div>
    )
}
