import React, { Component } from 'react';
import WeatherList from './components/WeatherList/WeatherList';

const cities = ["New York,us","Valencia,es"];

class App extends Component {
  render() {
    return (
      <div>
        <WeatherList cities={cities}></WeatherList>
      </div>
    );
  }
}

export default App;
