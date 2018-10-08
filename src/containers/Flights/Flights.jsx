import React, { Component } from 'react';
import { connect } from 'react-redux';

import Flights from '../../components/Flights/Flights';

export class FlightsContainer extends Component {
  render () {
    return (
      <Flights
        user={this.props.user}
        flightActions={this.props.flightActions} 
      />
    );
  }
}

function mapStateToProps (state) {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightsContainer);
