import React, { Component } from 'react';
import WeatherList from './components/WeatherList/WeatherList';

const cities = ["Buenos Aires,ar","Madrid,es","New York,us"];

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
