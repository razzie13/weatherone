import React from 'react'

export default function MinuteForecast(props) {

    

    return (
        <>

        {(props.minuteData.map((rain) => (rain.precipitation))) > 0 ? 
        
        <div className='app-section-full-width'>
            <div>
                <h3>Precipitation in the forecast this hour</h3>
            </div>
            <div className="precip-chart">
                {props.minuteData.map((minute) => (
                    <div key={minute.dt} className={['precipitation', minute.precipitation > 0 ? 'active-precipitation' : 'no-precipitation'].join(' ')}></div>
                    ))
                }
            </div>

        </div>

        : null

        }


        </>
    )
}
