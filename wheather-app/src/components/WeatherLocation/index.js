import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

import { SUN } from '../../constants/weathers';

const data = {
    temperature: 20,
    weatherState: SUN,
    humidity: 80,
    wind: "10 m/s"
}

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: 'Cordoba',
            data: data
        }
    }

    actualizarData = () => {
        console.log("Actualizando datos");
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Cordoba,ar&APPID=92d440098068a10951f3cad240d5758a').then(res => {
            return res.json()
        }).then(info => {
            console.log(info);
        })
        
    }

    render(){
        return(
            <div className="weatherLocationCont">
                <Location city={this.state.city}></Location>
                <WeatherData data={this.state.data} ></WeatherData>
                <button onClick={this.actualizarData}>ACTUALIZAR</button>
            </div>
        )
    }
    
};

export default WeatherLocation;