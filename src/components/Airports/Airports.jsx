import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Airports.module.scss';

class Airports extends Component {
  render () {
    return (
      <div />
    )
  }
}

Airports.propTypes = {
  airports: PropTypes.object,
  airportActions: PropTypes.object
}

export default Airports
