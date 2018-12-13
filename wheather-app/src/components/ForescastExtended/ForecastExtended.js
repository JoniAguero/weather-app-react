import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './ForecastExtended.css';
import ForecastItem from './ForecastItem/ForecastItem';

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
    
  }

  componentWillReceiveProps() {
    this.setState({
      forecastDate: undefined
    })
 
  }

  renderLocalItems = forecastDate => {
    return forecastDate.map(forecast => <ForecastItem day={forecast.weekDay} 
                                                      data={forecast.data}
                                                      hour={forecast.hour}
                                                      key={`${forecast.weekDay}${forecast.hour}`}/> )
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
        <h2 className = "forecastTitle">
          Pronostico Extendido para: {city}
        </h2>
          {
            forecastDate ? 
            this.renderLocalItems(this.state.forecastDate):
            this.renderProgress()
          }
        
      </div>
    )
  }
}

export default ForecastExtended;
