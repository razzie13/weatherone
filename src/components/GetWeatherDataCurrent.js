import React from 'react'

export default function GetWeatherDataCurrent(props) {

    let classes = ['current-', props.id]

    return (
        <div id={classes.join('')} className="app-section-half-width">
            <div className="app-section-data-top"><span>{props.id}</span></div>
            <i></i>
            <div className="app-section-data-bottom"><span></span></div>
        </div>
    )
}
