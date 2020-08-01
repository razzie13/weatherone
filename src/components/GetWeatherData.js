import React from 'react';

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