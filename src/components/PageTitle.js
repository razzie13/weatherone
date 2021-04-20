import { faSave } from '@fortawesome/free-regular-svg-icons'
import { faBullseye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function PageTitle(props) {

    return (
        <div className="app-section-full-width page-header">
            <h1>weather<span className="weatherone">one</span></h1>
            <h3><span className="coords">{props.cityName}</span>
            
            {/* <span className="remember-location">
                {props.isCityNameSaved ? <FontAwesomeIcon icon={faBullseye} /> : <FontAwesomeIcon icon={faSave}/>} | <small onClick={props.viewSavedCities}>select a place</small></span> */}
                
            </h3>
                {/* {JSON.parse(localStorage.getItem('weatherone_locations')).cityName === props.cityName ? <FontAwesomeIcon icon={faBullseye} /> : <FontAwesomeIcon icon={faSave}/>} | <small onClick={props.viewSavedCities}>select a place</small></span></h3> */}
        </div>
    )
}
