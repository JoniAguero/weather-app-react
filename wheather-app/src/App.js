import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

const cities = ["New York,us", "Valencia,es", "Lima,pe", "Cordoba,ar", "Sao Paulo,br"];

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
        <Row>
          <Col xs={12} md={6}>
            <div className="containerApp">
              <LocationListContainer cities={cities} />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Paper>
              <div className="containerAppDetails">
                <div className="details">
                  <ForecastExtendedContainer />
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
