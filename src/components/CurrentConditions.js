import React from 'react';
import GetCurrentTemperature from './GetCurrentTemperature';


export default function CurrentConditions() {
    return (
        <div>
            <div className="app-section-full-width"><h3>Right Now:</h3></div>
            <div className="app-section-half-width-container">
            <div className="app-section-half-width"></div>
            
            <GetCurrentTemperature />

            <div className="app-section-half-width">8</div>
            <div className="app-section-half-width"></div>
        </div>
        </div>
        
    )
}
