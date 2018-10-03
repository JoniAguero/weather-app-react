import React from 'react'
import WeatherLocation from '../WeatherLocation';

const WeatherList = () => {
  return (
    <div className="flex-list">
      <WeatherLocation city="Cordoba,ar" />
      <WeatherLocation city="Sao Paulo,br" />
      <WeatherLocation city="New York,us" />
      <WeatherLocation city="Madrid,es" />
      <WeatherLocation city="Lisboa,por" />
    </div>
  )
}

export default WeatherList;
