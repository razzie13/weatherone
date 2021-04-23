import { faSave } from '@fortawesome/free-regular-svg-icons'
import { faBullseye, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function PageTitle(props) {

    console.log(props)

    let localLocationsInStorage = JSON.parse(localStorage.getItem('weatherone_locations'))
    console.log(localLocationsInStorage)

    return (
        <div className="app-section-full-width page-header">
            <div className="weatherone-topline">
              <h1>weather<span className="weatherone">one</span></h1>  
              {props.locationSource === 'ipAddress' ? <FontAwesomeIcon icon={faBullseye} onClick={props.getWeatherDataFromGps} /> : null}
            </div>
            
            <h3><span className="coords">{props.cityName}</span>
            
            <span className="remember-location">
            {localLocationsInStorage.map
                (city => 
                    city.cityName === props.cityName ? 
                        <FontAwesomeIcon icon={faHeart}/> : 
                        null 
                )}

            | <small onClick={props.viewSavedCities}>select a place</small> 
            </span></h3>
        </div>
    )
}
