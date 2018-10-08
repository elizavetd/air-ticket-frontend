import React, { Component } from 'react'
import { connect } from 'react-redux'

import Auth from '../../components/Auth/Auth'

export class AuthContainer extends Component {
  render () {
    return (
      <Auth
        authActions={this.props.authActions} 
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
