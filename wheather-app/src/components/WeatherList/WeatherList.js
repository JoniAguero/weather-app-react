import React from 'react'
import WeatherLocation from '../WeatherLocation';

const WeatherList = () => {
  return (
    <div>
      <WeatherLocation city="Cordoba,ar" />
      <WeatherLocation city="Sao Paulo,br" />
      <WeatherLocation city="New York,us" />
    </div>
  )
}

export default WeatherList;
