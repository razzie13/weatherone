import React, { Component } from 'react'
//import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

import WeatherConditions from './WeatherConditions'
import HourlyForecast from './WeatherComponents/HourlyForecast'
import LongRangeForecast from './WeatherComponents/LongRangeForecast'


export default class WeatherMain extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            rightNow: true,
            hourlyForecast: false,
            longRangeForecast: false
        }

        this.showLongRangeForecast = this.showLongRangeForecast.bind(this);
        this.showCurrentConditions = this.showCurrentConditions.bind(this);
        this.showHourlyForecast = this.showHourlyForecast.bind(this);

    }

    showLongRangeForecast = () => {
        this.setState({ 
            rightNow: false,
            hourlyForecast: false,
            longRangeForecast: true
        });
    }

    showCurrentConditions = () => {
        this.setState({ 
            rightNow: true,
            hourlyForecast: false,
            longRangeForecast: false
        });
    }

    showHourlyForecast = () => {
        this.setState({ 
            rightNow: false,
            hourlyForecast: true,
            longRangeForecast: false
        });
    } 


    
    render() {
        return (
            <div key={uuidv4()}>
                <div key={uuidv4()} className="app-section-full-width right-now-long-range">
                    <h3 className={this.state.rightNow ? 'active' : 'inactive'} onClick={this.showCurrentConditions}>Right Now</h3>
                    <h3 className={this.state.hourlyForecast ? 'active' : 'inactive'} onClick={this.showHourlyForecast}>Hourly</h3>
                    <h3 className={this.state.longRangeForecast ? 'active' : 'inactive'} onClick={this.showLongRangeForecast}>Long Range</h3></div>
                {this.state.rightNow ? <WeatherConditions data={this.props.data} /> : null} 
                {this.state.hourlyForecast ? <HourlyForecast data={this.props.data} /> : null }
                {this.state.longRangeForecast ? <LongRangeForecast data={this.props.data} /> : null }               
            </div>
        )
    }

}              

