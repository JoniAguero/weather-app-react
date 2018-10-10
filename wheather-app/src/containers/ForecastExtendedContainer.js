import React, { Component } from 'react'
import { connect } from 'react-redux'
import ForescastExtended from './../components/ForescastExtended/ForecastExtended';

class ForecastExtendedContainer extends Component {

  render() {
    return (
      <div>
        {!this.props.city ? <h1 className="center">No se selecciono Ciudad</h1> : <ForescastExtended city={this.props.city} />}
      </div>
    )
  }
}

const mapStateToProps = state => ({ city: state.city });

export default connect(mapStateToProps, null)(ForecastExtendedContainer)
