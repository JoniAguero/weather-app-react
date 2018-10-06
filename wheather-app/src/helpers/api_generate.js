import { api_key, urlWeather, urlForecast, metric } from './../constants/api_url';

export const getInfoDataWeather = (city) => {
    
    return `${urlWeather}q=${city}&${metric}&APPID=${api_key}`;

}

export const getInfoDataForecast = (city) => {

    return `${urlForecast}q=${city}&${metric}&APPID=${api_key}`;

}