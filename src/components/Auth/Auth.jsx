import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Auth.module.scss';

class Auth extends Component {
  render () {
    return (
      <div />
    )
  }
}

Auth.propTypes = {
  user: PropTypes.object,
  authActions: PropTypes.object
}

export default Auth
