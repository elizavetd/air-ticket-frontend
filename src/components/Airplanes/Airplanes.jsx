import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Airplanes.module.scss';

class Airplanes extends Component {
  render () {
    return (
      <div />
    )
  }
}

Airplanes.propTypes = {
  airplanes: PropTypes.object,
  airplaneActions: PropTypes.object
}

export default Airplanes
