import React from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function SavedCities(props) {

    let localLocationsInStorage = JSON.parse(localStorage.getItem('weatherone_locations'))
    console.log(localLocationsInStorage)

    return (
        <div className="saved-cities-container">
            <h2>Your Saved Spots<button className="close-button" onClick={props.hideSavedCities}>X</button></h2>
                        {localLocationsInStorage.map(city =>
                <div key={uuidv4}><h3>{city.cityName}</h3><button>select</button></div>
            )}
        </div>   
    )
}
