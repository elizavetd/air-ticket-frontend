import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as authActions from '../../actions/auth';

import Menu from '../../components/Menu/Menu';

export class MenuContainer extends Component {
  render () {
    return (
      <Menu
        auth={this.props.auth}
        authActions={this.props.authActions}
      />
    );
  }
}

function mapStateToProps (state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps (dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuContainer));
