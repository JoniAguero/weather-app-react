import React, { Component } from 'react';
import WeatherList from './components/WeatherList/WeatherList';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';
import ForecastExtended from './components/ForescastExtended/ForecastExtended';

import { store } from './store';
import { setCity } from './actions';

const cities = ["New York,us", "Valencia,es", "Lima,pe", "Cordoba,ar", "Sao Paulo,br"];

class App extends Component {

  constructor() {
    super();
    this.state = {
      city: undefined
    }
  }

  showInfoCity = city => {
    this.setState({
      city
    })

    store.dispatch(setCity(city));

  }

  render() {
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
          <div className="containerApp">
              <WeatherList onSelectedLocation={this.showInfoCity} cities={cities}></WeatherList>
          </div>
          </Col>
          <Col xs={12} md={6}>
            <Paper>
              <div className="containerAppDetails">
                <div className="details">
                  {!this.state.city ? <h1 className="center">No se selecciono Ciudad</h1> : <ForecastExtended city={this.state.city} />}
                </div>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
