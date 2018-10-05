import React from 'react'
import WeatherLocation from '../WeatherLocation';

const WeatherList = ({ cities, onSelectedLocation }) => {

  const handleWeatherLocationClick = city => { 
    onSelectedLocation(city);
  }

  const showCities = cities => (
    cities.map((city, index) =>
      <WeatherLocation
        onWeatherLocationClick={() => handleWeatherLocationClick(city)}
        city={city}
        key={index} />))

  return (
    <div className="weatherList">
      {showCities(cities)}
    </div>
  )

};

export default WeatherList;
