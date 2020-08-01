import React from 'react';
import CityName from './CityName';

export default function TomorrowForecast() {
    return (
        <div>
            <div className="app-section-full-width"><h3>Tomorrow in </h3><CityName /></div>
            <div className="app-section-half-width-container">
            <div className="app-section-half-width"></div>
            <div className="app-section-half-width"></div>
        </div>
        </div>
        
    )
}
