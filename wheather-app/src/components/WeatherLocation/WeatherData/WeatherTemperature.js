import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,

} from './../../../constants/weathers';
import './styles.css';

const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]: "day-thunderstore",
    [DRIZZLE]: "day-showers",
};

const getWeatherIcon = id => {

    switch (id) {
        case id < 300:
            return THUNDER;
        case id < 400:
        return DRIZZLE;
        case id < 600:
            return RAIN;
        case id < 700:
        return SNOW;
        case id === 800:
            return SUN;
        default:
            return CLOUD;
    }

}

const showWeatherIcon = weatherState =>{

    const id = weatherState;
    const icon = icons[getWeatherIcon(id)];
    
    const sizeIcon = "4x";

    if (icon) return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
    else return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />;
}


const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureCont">
        { 
            showWeatherIcon(weatherState)
        }
        <span className="temperature">{ `${temperature}`}</span>
        <span className="temperatureType">{`C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.number.isRequired,
};

export default WeatherTemperature;