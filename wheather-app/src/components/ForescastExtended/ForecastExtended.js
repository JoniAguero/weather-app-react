import React, { Component } from 'react';
import './ForecastExtended.css';
import ForecastItem from './ForecastItem/ForecastItem';

const days = ['Lunes','Martes','Miércoles','Jueves','Viernes'];
const data = {
  temperature: 20,
  weatherState: 800,
  humidity: 20,
  wind: 'sin viento',
}

export class ForecastExtended extends Component {

  getLocalItems = () => {
    return days.map( day => <ForecastItem day={day} data={data} key={day}/> )
  }

  render() {
      const city = this.props.city;
    return (
      <div>
        < h2 className = "forecastTitle" >
          Pronostico Extendido para: {city}
          {this.getLocalItems()}
        </h2>
      </div>
    )
  }
}

export default ForecastExtended;
