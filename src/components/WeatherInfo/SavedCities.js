import React from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function SavedCities(props) {

    console.log(props)

    return (
        <div className="saved-cities-container" key={uuidv4}>
            <h2>Your Saved Spots<button className="close-button" onClick={props.hideSavedCities}>X</button></h2>
                        {props.savedCities !== null ?
                        props.savedCities.map(city =>
                <div key={city}><h3>{city}</h3><button onClick={() => props.selectOtherLocation(city)}>select</button></div>
            ) : null}
        </div>   
    )
}
