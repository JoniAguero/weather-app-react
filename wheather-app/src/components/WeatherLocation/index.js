import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getInfoDataWeather } from './../../helpers/api_generate';

class WeatherLocation extends Component {

    constructor({city}){
        
        super();
        this.state = {
            city: city,
            data: undefined
        }
    }

    componentDidMount = () => {
      this.actualizarData();
    }
    
    actualizarData = () => {        
        
        fetch(getInfoDataWeather(this.state.city)).then(res => {
            return res.json()
        }).then(info => {
            const data = {
                temperature: info.main.temp,
                weatherState: info.weather[0].id,
                humidity: info.main.humidity,
                wind: `${info.wind.speed} m/s`
            }

            this.setState({
                data
            })
        })
    }

    showInfoCity = () => {
        this.props.onWeatherLocationClick(this.state.city)
    }

    render(){

        const { city, data } = this.state;
        
        return(
            <div className="weatherLocationCont" onClick={this.showInfoCity}>
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={50}/>}
            </div>
        )
    }
    
}

export default WeatherLocation;