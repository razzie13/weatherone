
import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default class GetMinuteData extends React.Component  {
    state = {
        minuteForecast: []
    }

    componentDidMount()  {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/onecall?lat=43.4516&lon=-80.4925&units=metric&exclude=hourly,daily&appid=31a4da5ead9b1633c81fc2dba65ddee9`)
        
        .then(res => {
            //console.log('current temperature: ' + res.data.current.temp)
            
            //console.log('response: ' + res.data.minutely)
            
            this.setState({ minuteForecast: res.data.minutely })

        });
    }

    render()  {
        return (
        <ul>{this.state.minuteForecast.map(minuteForecast => <li key={uuidv4()}>Precipitation: {minuteForecast.minutely}</li>)}</ul>
        )
    }
}

/*
export default function GetCurrentTemp() {
    const proxy = `https://cors-anywhere.herokuapp.com/`;
    const api = `${proxy}https://api.openweathermap.org/data/2.5/onecall?lat=43.4516&lon=-80.4925&units=metric&exclude=hourly,daily&appid=31a4da5ead9b1633c81fc2dba65ddee9`;

    fetch(api, {
        "method": "GET",
        "headers": {

        }
    })
    .then((res) => {return res.json()})
    .then(data => {
        console.log(data);
        console.log('current temperature: ' + data.current.temp);
})
    .catch(err => {
        console.log(err);
    });
    return (
        
            <span>32</span>
        
    )
}
*/


/*

const proxy = `https://cors-anywhere.herokuapp.com/`;
const api = `${proxy}https://api.openweathermap.org/data/2.5/onecall?lat=43.4516&lon=-80.4925&units=metric&exclude=hourly,daily&appid=31a4da5ead9b1633c81fc2dba65ddee9`;

fetch(api, {
	"method": "GET",
	"headers": {

	}
})
.then((res) => {return res.json()})
.then(data => {
	console.log(data);
})
.catch(err => {
	console.log(err);
});
*/