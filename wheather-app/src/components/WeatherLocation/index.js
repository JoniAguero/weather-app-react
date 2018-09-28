import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { SUN } from '../../constants/weathers';
import { api_url_key } from '../../constants/api_url';

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: 'Cordoba',
            data: undefined
        }
    }

    componentDidMount = () => {
      this.actualizarData();
    }
    
    actualizarData = () => {
        
        fetch(api_url_key).then(res => {
            return res.json()
        }).then(info => {
            const data = {
                temperature: info.main.temp,
                weatherState: SUN,
                humidity: info.main.humidity,
                wind: `${info.wind.speed} m/s`
            }

            this.setState({
                data
            })
        })
    }

    render(){

        const { city, data } = this.state;

        return(
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData> : <CircularProgress />}
            </div>
        )
    }
    
};

export default WeatherLocation;