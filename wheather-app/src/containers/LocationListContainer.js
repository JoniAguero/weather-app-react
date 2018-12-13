import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { setSelectedCity } from '../actions/city';

import WeatherList from './../components/WeatherList/WeatherList';


class LocationListContainer extends Component {

  showInfoCity = city => {
    this.props.setSelectedCity(city);
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
    setSelectedCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setSelectedCity: value => dispatch(setSelectedCity(value))
})

export default connect(null, mapDispatchToProps)(LocationListContainer)
