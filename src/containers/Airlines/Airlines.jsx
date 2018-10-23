import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as airlineActions from '../../actions/airlines';

import Airlines from '../../components/Airlines/Airlines';

export class AirlinesContainer extends Component {
  render () {
    return (
      <Airlines
        airlines={this.props.airlines}
        airlineActions={this.props.airlineActions}
        countries={this.props.countries}
      />
    );
  }
}

function mapStateToProps (state) {
  return {
    airlines: state.airlines,
    countries: state.app.countries.map((country) => country.name)
  };
}

function mapDispatchToProps (dispatch) {
  return {
    airlineActions: bindActionCreators(airlineActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AirlinesContainer);
