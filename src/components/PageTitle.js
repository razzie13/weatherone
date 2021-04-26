//import { faSave } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons'
import { faBullseye, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'



export default function PageTitle(props) {

    console.log(props)
    console.log(props.cityName)
    console.log(props.savedCities)

    return (
        <div className="app-section-full-width page-header">
            <div className="weatherone-topline">
              <h1>weather<span className="weatherone">one</span></h1>  
              {props.locationSource === 'ipAddress' ? <FontAwesomeIcon icon={faBullseye} onClick={props.getWeatherDataFromGps} /> : null}
            </div>
            
            <h3><span className="coords">{props.cityName}</span>
            
            <span className="remember-location">

            {
                props.savedCities !== null ?
                    props.cityName !== null ? 
                        props.savedCities.includes(props.cityName) ?
                        <FontAwesomeIcon icon={faHeart} value={props.cityName} onClick={props.removeFromSavedCities} title={"Added to Favourites"}/> :
                        <FontAwesomeIcon icon={faHeartOutline} onClick={props.addToSavedCities} title={"Add to Favourites"}/>
                    : null
                : <FontAwesomeIcon icon={faHeartOutline} onClick={props.addToSavedCities} title={"Add to Favourites"}/>
            }


            | <small onClick={props.viewSavedCities}>select a place</small> 
            </span></h3>
        </div>
    )
}
