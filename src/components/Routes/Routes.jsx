import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Flights from '../../containers/Flights/Flights'
import Airports from '../../containers/Airports/Airports'
import Airplanes from '../../containers/Airplanes/Airplanes'
import Airlines from '../../containers/Airlines/Airlines'
import Account from '../../containers/Account/Account'
import Auth from '../../containers/Auth/Auth'

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
    )
  }
}

export default Routes
