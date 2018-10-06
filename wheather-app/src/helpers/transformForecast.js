import moment from 'moment';

const transformForecast = (data) => {
    return data.list.filter( item => (
        moment.unix(item.dt).hour() === 6 ||
        moment.unix(item.dt).hour() === 12 ||
        moment.unix(item.dt).hour() === 18 
    )).map( item => ({
        weekDay:  moment.unix(item.dt).format('dddd'),
        hour: moment.unix(item.dt).hour(),
        data: {
            temperature: item.main.temp,
            weatherState: item.weather[0].id,
            humidity: item.main.humidity,
            wind: `${item.wind.speed} m/s`
        }
    }))
}

export default transformForecast;