
import React from 'react';
import axios from 'axios';
import CityName from './CityName';


export default class GetWeatherData extends React.Component  {
    state = {
        conditions : '',
        conditionsDescription : '',
        temperature : '',
        feelsLike : '',
        uvi : '',
        humidex : '',
        sunTime : '',
        umbrellaToday : '',
        jacketToday : '',

        tomorrowHighTemp : '',
        tomorrowFeelsLike : '',
        tomorrowConditions : '',

        tomorrowNightLowTemp : '',
        tomorrowNightFeelsLike : ''
        
        //error : '',
        //isBusy : false
        
    }

    //if (this.state.uvi >= 7)  {document.getElementById('current-uv-index').classList.add('uv-very-high')};

    componentDidMount() {
        console.log('function componentDidMount');
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/onecall?lat=43.4516&lon=-80.4925&units=metric&appid=31a4da5ead9b1633c81fc2dba65ddee9`)

        .then(res => {
            console.log(res)
            
            var date = new Date();
            let currentTime = date.getTime()
            //let currentUnixTime = Date.now()

            
                
            var sunTime;
            function sunTimes()  {
                let morning;
                let riseOrSet;
                let sunriseTime = new Date(res.data.current.sunrise * 1000);
                //let sunriseTime = Date.now(res.data.current.sunrise);
                let sunsetTime = new Date(res.data.current.sunset * 1000);
                let tomorrowSunriseTime = new Date(res.data.daily[1].sunrise * 1000);

                console.log(currentTime);
                console.log(sunriseTime);

                if (currentTime < sunriseTime) {
                    sunTime = sunriseTime
                    morning = true
                }
                if (currentTime < sunsetTime) {
                    sunTime = sunsetTime
                    morning = false
                }
                if (currentTime > sunsetTime) {
                    sunTime = tomorrowSunriseTime
                    morning = true
                } 

                if (morning === true)  {
                    morning = " AM";
                    riseOrSet = "Sunrise: "
                } else  {
                    morning = " PM"
                    riseOrSet = "Sunset: "
                }
                

                let hours = sunTime.getHours(sunTime);
                if (hours > 12)  {
                    hours = (hours - 12)
                    }
                let minutes = "0" + sunTime.getMinutes(sunTime);
                sunTime = riseOrSet + hours + ':' + minutes.substr(-2) + morning;
            }
            sunTimes()

            var precipitation = "No Rain for 12 Whole Hours";
            function umbrellaToday()  {
                for (let i = 0; i < (res.data.hourly.length - 36); i++)  {
                    if (res.data.hourly[i].rain)  {
                        precipitation = "Pack Your Umbrella"
                    } 
                    if ((res.data.hourly[i].rain)  && (res.data.current.temp < 0))  {
                        precipitation = "It will snow today"
                    }
                    console.log(res.data.hourly[i].rain);
                }
            }
            umbrellaToday()


            var todayJacketForecast;
            function jacketToday()  {
                if (res.data.current.temp >= 30)  {
                    todayJacketForecast = "Wear your Shorts & Tanks!"
                }
                if (res.data.current.temp >= 16 && res.data.current.temp < 29)  {
                    todayJacketForecast = "Wear your Tees & Shorts!"
                }
                if (res.data.current.temp >= 10 && res.data.current.temp < 15)  {
                    todayJacketForecast = "Wear your Light Jacket"
                }
                if (res.data.current.temp >= 0 && res.data.current.temp < 9)  {
                    todayJacketForecast = "Wear your Jacket"
                }
                if (res.data.current.temp < 0)  {
                    todayJacketForecast = "Wear your Winter Jacket!"
                }
            }
            jacketToday()

            var weatherIcon;
            //var responseIcon = res.data.current.weather[0].icon;
            function convertWeatherIconToFontAwesome()  {
                if (res.data.current.weather[0].icon === '01d')  {weatherIcon = "fas fa-sun"}; // clear
                if (res.data.current.weather[0].icon === '02d')  {weatherIcon = "fas fa-cloud-sun"}; // few clouds
                if (res.data.current.weather[0].icon === '03d')  {weatherIcon = "fas fa-cloud-sun"}; // scattered clouds
                if (res.data.current.weather[0].icon === '04d')  {weatherIcon = "fas fa-cloud"}; // broken clouds
                if (res.data.current.weather[0].icon === '09d')  {weatherIcon = "fas fa-cloud-showers-heavy"}; // rain shower
                if (res.data.current.weather[0].icon === '10d')  {weatherIcon = "fas fa-cloud-rain"}; // rain
                if (res.data.current.weather[0].icon === '11d')  {weatherIcon = "fas fa-bolt"}; // thunderstorm
                if (res.data.current.weather[0].icon === '13d')  {weatherIcon = "fas fa-snowflake"}; // snow
                if (res.data.current.weather[0].icon === '50d')  {weatherIcon = "fas fa-water"}; // mist
            }
            convertWeatherIconToFontAwesome()
            


            this.setState({ 
                conditions : weatherIcon,
                //conditions : (res.data.current.weather[0].icon),
                conditionsDescription : (res.data.current.weather[0].description),
                temperature : Math.round(res.data.current.temp),
                feelsLike : Math.round(res.data.current.feels_like),
                uvi : Math.round(res.data.current.uvi),
                humidity : (res.data.current.humidity),
                sunTime : sunTime,
                umbrellaToday : precipitation,
                jacketToday : todayJacketForecast,

                tomorrowHighTemp : Math.round(res.data.daily[1].temp.max),
                tomorrowFeelsLike : Math.round(res.data.daily[1].feels_like.day),
                tomorrowConditions : (res.data.daily[1].weather[0].main),
        
                tomorrowNightLowTemp : Math.round(res.data.daily[1].temp.night),
                tomorrowNightFeelsLike : Math.round(res.data.daily[1].feels_like.night),
                
             })
        })
        //.catch(error => {
        //    this.setState({ 
        //        error : error.message() ,
        //    })
        //})

        
    }


    
    testFunction = () => {
        console.log('function testFunction');
    }
    

    render()  { 

        return(

            <React.Fragment>
            <div>
                <div className="app-section-full-width"><h3>Right Now:</h3></div>
                <div className="app-section-half-width-container">
                    <div id="current-conditions" className="app-section-half-width">
                        <div className="app-section-data-top"><span>Conditions</span></div>
                        <i className={this.state.conditions}></i>
                        <div className="app-section-data-bottom"><span>{this.state.conditionsDescription}</span></div>
                    </div>
                    <div id="current-temperature" className="app-section-half-width twenties">
                        <div className="app-section-data-top"><span>Temperature</span></div>
                        {this.state.temperature}&deg;
                        <div className="app-section-data-bottom"><span>Feels Like {this.state.feelsLike}&deg;C</span></div>
                    </div>
                    <div id="current-uv-index" className="app-section-half-width uv-7">
                        <div className="app-section-data-top"><span>UV Index</span></div>
                        {this.state.uvi}
                        <div className="app-section-data-bottom"></div>
                    </div>
                    <div id="current-humidity" className="app-section-half-width">
                        <div className="app-section-data-top"><span>Humidity</span></div>
                        {this.state.humidity}%
                        <div className="app-section-data-bottom"></div>
                    </div>
                </div>

                <div className="app-section-full-width"><h3>Your Day at a Glance:</h3></div>

                <div className="app-section-full-width text-center day-outlook no-weather-alerts">
                    <h3>No Watches or Warnings</h3>
                </div>

                <div className="app-section-full-width day-outlook text-center jacket-no-need">
                    <h3>{this.state.jacketToday}</h3>
                </div>

                <div className="app-section-full-width day-outlook text-center rain-coming">
                    <h3>{this.state.umbrellaToday}</h3>
                </div>

                <div id="sun-times" className="app-section-full-width day-outlook text-center">
                    <h3>{this.state.sunTime}</h3>
                </div>

 
            </div>

            <div>
                <div className="app-section-full-width"><h3>Tomorrow in <CityName /></h3></div>
                <div id="tomorrow-weather" className="app-section-full-width full-width-flex">
                    <div className="app-section-flex-third rain-coming">
                        <h3>{this.state.tomorrowConditions}</h3>
                    </div>
                    <div className="app-section-flex-third twenties">
                        <h3>High: {this.state.tomorrowHighTemp}&deg;</h3>
                    </div>
                    <div className="app-section-flex-third twenties">
                        <h3>Feels: {this.state.tomorrowFeelsLike}&deg;</h3>
                    </div>
                </div>
            </div>
        
        
            </React.Fragment>
            );
            
    }
}

