import React from 'react'

export default function DayAtAGlance(props) {
    return (
        <div className={props.styling}>
            <h3>{props.info}</h3>
        </div>
    )
}
