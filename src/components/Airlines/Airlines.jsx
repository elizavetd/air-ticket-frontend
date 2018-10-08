import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Airlines.module.scss';

class Airlines extends Component {
  render () {
    return (
      <div />
    )
  }
}

Airlines.propTypes = {
  airlines: PropTypes.object,
  airlineActions: PropTypes.object
}

export default Airlines
