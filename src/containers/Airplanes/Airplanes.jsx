import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as airplaneActions from '../../actions/airplanes';

import Airplanes from '../../components/Airplanes/Airplanes';

export class AirplanesContainer extends Component {
  render () {
    return (
      <Airplanes
        airplanes={this.props.airplanes}
        airlines={this.props.airlines}
        airplaneActions={this.props.airplaneActions}
      />
    );
  }
}

function mapStateToProps (state) {
  return {
    airplanes: state.airplanes,
    airlines: Object.values(state.airlines.items)
  };
}

function mapDispatchToProps (dispatch) {
  return {
    airplaneActions: bindActionCreators(airplaneActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AirplanesContainer);
