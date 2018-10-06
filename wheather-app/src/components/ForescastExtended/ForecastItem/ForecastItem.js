import React, { Component } from 'react';

import WeatherData from '../../WeatherLocation/WeatherData';
import './ForecastItem.css';

export class ForecastItem extends Component {
  render() {

    const day = this.props.day;
    const hour = this.props.hour;

    return (
      <div className="contain-item">
        <p className="item"> {day} {hour}hs </p>
        <WeatherData data = {this.props.data}/>
      </div>
    )
  }
}

export default ForecastItem;
