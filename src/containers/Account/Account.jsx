import React, { Component } from 'react'
import { connect } from 'react-redux'

import Account from '../../components/Account/Account'

export class AccountContainer extends Component {
  render () {
    return (
      <Account
        user={this.props.user}
        accountActions={this.props.accountActions} 
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer)
