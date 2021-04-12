import React from 'react'

export default function PageTitle(props) {
    return (
        <div className="app-section-full-width page-header">
            <h1>weather<span className="one">one</span></h1>
            <h3>(<span className="coords">{props.latitude} x {props.longitude}</span>)</h3>
        </div>
    )
}
