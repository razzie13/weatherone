import React from 'react';
//import GetCurrentTemp from './GetWeatherData';

export default function CurrentConditions() {
    //const [open, setOpen] = useState(false)
    return (
        <div>
            <div className="app-section-full-width"><h3>Right Now:</h3></div>
            <div className="app-section-half-width-container">
            <div className="app-section-half-width"></div>
            <div className="app-section-half-width">25</div>
            <div className="app-section-half-width">8</div>
            <div className="app-section-half-width"></div>
        </div>
        </div>
        
    )
}
