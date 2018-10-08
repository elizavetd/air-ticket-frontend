import React, { Component } from 'react';
import { connect } from 'react-redux';

import Airlines from '../../components/Airlines/Airlines';

export class AirlinesContainer extends Component {
  render () {
    return (
      <Airlines
        airlines={this.props.airlines}
        airlineActions={this.props.airlineActions} 
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

export default connect(mapStateToProps, mapDispatchToProps)(AirlinesContainer);
