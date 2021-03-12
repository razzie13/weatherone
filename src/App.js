// node_modules
import React, { Component } from 'react'

// css
import './colours.css';
import './TemperatureColours.css'
import './layout.css';

// page components
import PageTitle from './components/PageTitle';
import WeatherMain from './components/WeatherInfo/WeatherMain'
import Footer from './components/Footer';

export default class App extends Component {

constructor(props) {
  super(props)

  this.state = {
     cityName: 'Kitchener, ON'
  }
}

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <PageTitle cityName={this.state.cityName}/>
          </header>
          <main>
            <WeatherMain />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
    )
  }
}
            


