import React from 'react'

export default function PageTitle(props) {
    return (
        <div className="app-section-full-width page-header">
            <h1>weatherone</h1>
            <h3>{props.cityName}</h3>
        </div>
    )
}
