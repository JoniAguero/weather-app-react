/* eslint-disable no-console */
import { getInfoDataForecast } from '../helpers/api_generate';
import transformForecast from '../helpers/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({
    type: SET_CITY, payload
}); 
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload })

export const setSelectedCity = payload => {
    return dispatch => {
        dispatch(setCity(payload))
        return fetch(getInfoDataForecast(payload)).then(res => res.json())
        .then(info => {
            const forecastDate = transformForecast(info);
            console.log(forecastDate);
            dispatch(setForecastData({city: payload, forecastDate}))
        })
    }
}