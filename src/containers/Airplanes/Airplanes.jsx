import React, { Component } from 'react';
import { connect } from 'react-redux';

import Airplanes from '../../components/Airplanes/Airplanes';

export class AirplanesContainer extends Component {
  render () {
    return (
      <Airplanes
        airplane={this.props.airplane}
        airplaneActions={this.props.airplaneActions} 
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

export default connect(mapStateToProps, mapDispatchToProps)(AirplanesContainer);
