import React from 'react'
import WeatherLocation from '../WeatherLocation';

const showCities = cities => {
  return cities.map((city, index) => <WeatherLocation city={city} key={index}/>)
}

const WeatherList = ({cities}) => (
  
    <div className="weatherList">
      {showCities(cities)}
    </div>
  
);

export default WeatherList;
