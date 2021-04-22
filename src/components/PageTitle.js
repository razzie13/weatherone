//import { faHome } from '@fortawesome/free-solid-svg-icons'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function PageTitle(props) {

    let localLocationsInStorage = JSON.parse(localStorage.getItem('weatherone_locations'))
    console.log(localLocationsInStorage)

    return (
        <div className="app-section-full-width page-header">
            <h1>weather<span className="weatherone">one</span></h1>
            <h3><span className="coords">{props.cityName}</span>
            
            <span className="remember-location">
            | <small onClick={props.viewSavedCities}>select a place</small> 
            {/* {localLocationsInStorage.map(city => (city.cityName === props.cityName ? null : <FontAwesomeIcon icon={faHome}/>))} | <small onClick={props.viewSavedCities}>select a place</small>  */}
            </span></h3>
        </div>
    )
}
