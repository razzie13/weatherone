// node_modules
import React, { Component } from 'react'
import { v4 as uuidv4} from 'uuid'

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
        <div className="App" key={uuidv4()}>
          <header className="App-header">
            <PageTitle cityName={this.state.cityName}/>
          </header>
          <main key={uuidv4()}>
            <WeatherMain key={uuidv4()} />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
    )
  }
}
            


