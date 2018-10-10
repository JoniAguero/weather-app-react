import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { setCity } from './../actions';

import WeatherList from './../components/WeatherList/WeatherList';


class LocationListContainer extends Component {

  showInfoCity = city => {
    this.props.setCity(city);
  }

  render() {
    return (
      <div>
        <WeatherList onSelectedLocation={this.showInfoCity} cities={this.props.cities}></WeatherList>
      </div>
    )
  }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setCity(value))
})

export default connect(null, mapDispatchToProps)(LocationListContainer)
