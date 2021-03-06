import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../../actions/auth';

import Auth from '../../components/Auth/Auth';

export class AuthContainer extends Component {
  render () {
    return (
      <Auth
        authActions={this.props.authActions}
      />
    );
  }
}

function mapStateToProps (state) {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
