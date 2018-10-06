import React, { Component } from 'react';

import WeatherData from '../../WeatherLocation/WeatherData';

export class ForecastItem extends Component {
  render() {

    const day = this.props.day;

    return (
      <div>
        <p className = "contain-item"> {day} </p>
        <WeatherData data = {this.props.data}/>
      </div>
    )
  }
}

export default ForecastItem;
