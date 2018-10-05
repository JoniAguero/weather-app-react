import React, { Component } from 'react';
import WeatherList from './components/WeatherList/WeatherList';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';

const cities = ["New York,us","Valencia,es","Lima,pe"];

class App extends Component {
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
            <WeatherList cities={cities}></WeatherList>
          </Col>
          <Col xs={12} md={6}>
            <Paper>
              <div className="containerApp details"></div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
