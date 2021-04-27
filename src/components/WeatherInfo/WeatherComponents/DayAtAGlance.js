import React from 'react'

export default function DayAtAGlance(props) {

    console.log(props.info)

    
    let todayJacketForecast;
    if (props.info >= 30)  {todayJacketForecast = "Wear your Shorts & Tanks!"}
    if (props.info >= 21 && props.info <= 29)  {todayJacketForecast = "Wear your Tees & Shorts!"}
    if (props.info >= 16 && props.info <= 20)  {todayJacketForecast = "Leave your Jacket at Home!"}
    if (props.info >= 10 && props.info <= 16)  {todayJacketForecast = "Wear your Light Jacket"}
    if (props.info >= 0 && props.info <= 9)  {todayJacketForecast = "Wear your Jacket"}
    if (props.info < 0)  {todayJacketForecast = "Wear your Winter Jacket!"}

    console.log(todayJacketForecast)

    return (
        <div className={props.styling}>
            {props.name === 'alerts' ? (props.info ? <h3>Weather Alerts Issued</h3> : <h3>No Weather Alerts</h3>) : null}
            {props.name === 'jacket' ? <h3>{todayJacketForecast}</h3> : null}
            {props.name === 'sandals' ? <h3>Rock those Sandals!</h3> : null}
            {props.name === 'umbrella' ? (props.info > 0.7 ? <h3>Pack Your Umbrella</h3> : <h3>No Umbrella Needed</h3>) : null}
        </div>
    )
}
