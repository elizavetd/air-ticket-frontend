import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Account.module.scss';

class Account extends Component {
  render () {
    return (
      <div />
    )
  }
}

Account.propTypes = {
  user: PropTypes.object,
  accountActions: PropTypes.object
}

export default Account
