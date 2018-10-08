import React, { Component } from 'react'
import { connect } from 'react-redux'

import Airports from '../../components/Airports/Airports'

export class AirportsContainer extends Component {
  render () {
    return (
      <Airports
        airports={this.props.airports}
        airportActions={this.props.airportActions} 
      />
    )
  }
}

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AirportsContainer)
