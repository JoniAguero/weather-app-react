import React, { Component } from 'react'

export class ForecastExtended extends Component {
  render() {
      const city = this.props.city;
    return (
      <div>
        Pronostico Extendido para: {city}
      </div>
    )
  }
}

export default ForecastExtended
