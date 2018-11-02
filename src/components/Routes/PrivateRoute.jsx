import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render () {
    const RouteComponent = this.props.component;

    return (
        <Route
          component={ (props) => (
            localStorage.getItem('user')
              ? <RouteComponent {...props} />
              : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />
            )
          }
          path={this.props.path}
        />
    );
  }
}

export default PrivateRoute;
