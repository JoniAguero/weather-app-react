import { api_key, url, metric } from './../constants/api_url';

export const getInfoData = (city) => {
    
    return `${url}q=${city}&${metric}&APPID=${api_key}`;

}