import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getInfoData } from './../../helpers/api_generate';

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
        
        fetch(getInfoData(this.state.city)).then(res => {
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

    render(){

        const { city, data } = this.state;
        
        return(
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={50}/>}
            </div>
        )
    }
    
}

export default WeatherLocation;