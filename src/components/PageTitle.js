import { faSave } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons'
import { faBullseye, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { v4 as uuidv4 } from 'uuid'

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

            {/* {localLocationsInStorage.filter(city => city.cityName === props.cityName ?
                <FontAwesomeIcon icon={faHeart} title={'Added to Favourite Places'} key={uuidv4()} /> : 
                <FontAwesomeIcon icon={faHeartOutline} onClick={props.addToSavedCities} title={'Add to Favourite Places'} key={uuidv4()} />
                )} */}

              


            {localLocationsInStorage.map
            
                (city => 
                    city.cityName === props.cityName ? 
                        <FontAwesomeIcon icon={faHeart} title={'Added to Favourite Places'} key={uuidv4()} /> : null
                        //<FontAwesomeIcon icon={faHeartOutline} onClick={props.addToSavedCities} title={'Add to Favourite Places'} key={uuidv4()} />
                )}

{/* {localLocationsInStorage.map
                (city => 
                    city.cityName === props.cityName ? 
                        <FontAwesomeIcon icon={faHeart} title={'Added to Favourite Places'} key={uuidv4()} /> : 
                        <FontAwesomeIcon icon={faHeartOutline} onClick={props.addToSavedCities} title={'Add to Favourite Places'} key={uuidv4()} />
                )} */}

            | <small onClick={props.viewSavedCities}>select a place</small> 
            </span></h3>
        </div>
    )
}
