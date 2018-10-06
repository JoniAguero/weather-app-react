import React, { Component } from 'react';
import WeatherList from './components/WeatherList/WeatherList';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';
import ForecastExtended from './components/ForescastExtended/ForecastExtended';

const cities = ["New York,us","Valencia,es","Lima,pe"];

class App extends Component {

  constructor(){
    super();
    this.state = {
      city: undefined
    }
  }

  showInfoCity = city => {
    this.setState({
      city
    })
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
        <Row className="containerApp">
          <Col xs={12} md={6}>
            <WeatherList onSelectedLocation={this.showInfoCity} cities={cities}></WeatherList>
          </Col>
          <Col xs={12} md={6}>
            <Paper>
              <div className="containerApp details">
              {!this.state.city? <h1 className="center">No se selecciono Ciudad</h1> : <ForecastExtended city={this.state.city} /> }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
