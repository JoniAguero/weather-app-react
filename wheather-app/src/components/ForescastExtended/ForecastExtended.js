import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './ForecastExtended.css';
import ForecastItem from './ForecastItem/ForecastItem';

import { getInfoDataForecast } from './../../helpers/api_generate';
import  transformForecast  from './../../helpers/transformForecast';

const days = ['Lunes','Martes','Miércoles','Jueves','Viernes'];

export class ForecastExtended extends Component {

  constructor(){
    super();
    this.state = {
      forecastDate: undefined
    }
  }

  componentDidMount = () => {
    this.actualizarData();
  }

  actualizarData() {
    fetch(getInfoDataForecast(this.props.city)).then(res => {
      return res.json()
    }).then(info => {
      //const dataTransform = transformForecast(info); 
      // const forecastDate = {
      //   temperature: info.main.temp,
      //   weatherState: info.weather[0].id,
      //   humidity: info.main.humidity,
      //   wind: `${info.wind.speed} m/s`
      // }

      // this.setState({
      //   forecastDate
      // })
    })
  }

  renderLocalItems = () => {
    return days.map( day => <ForecastItem day={day} data={this.state.forecastDate} key={day}/> )
  }

  renderProgress = () => {
    return ( <div className = "forecastProgress"> < CircularProgress size = {
        50
      }
      /></div > )
  }

  render() {
      const {city} = this.props;
      const {forecastDate} = this.state;
    return (
      <div>
        < h2 className = "forecastTitle" >
          Pronostico Extendido para: {city}
          {
            forecastDate ? 
            null :
            this.renderProgress()
          }
        </h2>
      </div>
    )
  }
}

export default ForecastExtended;
