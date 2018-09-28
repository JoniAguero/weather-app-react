const api_key = '92d440098068a10951f3cad240d5758a';
const url = 'http://api.openweathermap.org/data/2.5/weather?';
const city = 'q=Cordoba,ar';
const metric = 'units=metric';

export const api_url_key = `${url}${city}&${metric}&APPID=${api_key}`;
