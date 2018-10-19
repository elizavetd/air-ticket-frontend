import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as airportActions from '../../actions/airports';

import Airports from '../../components/Airports/Airports';

export class AirportsContainer extends Component {
  render () {
    return (
      <Airports
        airports={this.props.airports}
        airportActions={this.props.airportActions}
        countries={this.props.countries}
      />
    );
  }
}

function mapStateToProps (state) {
  return {
    airports: state.airports,
    countries: state.app.countries
  };
}

function mapDispatchToProps (dispatch) {
  return {
    airportActions: bindActionCreators(airportActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AirportsContainer);
