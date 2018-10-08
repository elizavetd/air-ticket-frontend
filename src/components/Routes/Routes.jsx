import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Account from '../../containers/Account/Account';
import Airlines from '../../containers/Airlines/Airlines';
import Airplanes from '../../containers/Airplanes/Airplanes';
import Airports from '../../containers/Airports/Airports';
import Auth from '../../containers/Auth/Auth';
import Flights from '../../containers/Flights/Flights';

class Routes extends Component {
  render () {
    return (
      <React.Fragment>
        <Route path='/flights' component={ Flights } />
        <Route path='/airports' component={ Airports } />
        <Route path='/airplanes' component={ Airplanes } />
        <Route path='/airlines' component={ Airlines } />
        <Route path='/account' component={ Account } />
        <Route path='/auth' component={ Auth } />
      </React.Fragment>
    );
  }
}

export default Routes;
