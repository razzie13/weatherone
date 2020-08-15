
import React from 'react';
import axios from 'axios';

export default class GetCurrentTemperature extends React.Component  {
    state = {
        temperature : '',
        error : '',
        isBusy : false
    }

    getConditions = () => {
        console.log('function getConditions');
        const url = axios.get(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/onecall?lat=43.4516&lon=-80.4925&units=metric&exclude=hourly,daily&appid=31a4da5ead9b1633c81fc2dba65ddee9`)
        this.setState({
            isBusy : true
        })
        fetch(url).then(res => {
            return res.json();
        })
        .then(data => {
            console.log('current temperature: ' + data.current.temp)
            const currentTemperature = data.current.temp;    
            console.log('test: ' + currentTemperature);
            this.setState({ 
                temperature : currentTemperature,
                isBusy : false
             })
        })
        .catch(error => {
            this.setState({ 
                error : error.message() ,
                isBusy : false
            })
        })
    }

    render()  {
        let data = null;
            if (this.state.isBusy && !this.state.error)  {
                data = <div className="app-section-half-width">Loading...</div>
            } else if (this.state.error)  {
                data = <div className="app-section-half-width">Something Went Wrong : {this.state.error}</div>
            } else if (this.state.currentTemperature !== '') { 
                data = <div className="app-section-half-width">{this.state.currentTemperature}</div>
            
            }
            return(
                
                this.getConditions(data)
                
                );
            
    }
}

