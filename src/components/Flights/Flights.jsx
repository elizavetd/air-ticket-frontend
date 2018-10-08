import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Flights.module.scss';

class Flights extends Component {
  render () {
    return (
      <div />
    );
  }
}

Flights.propTypes = {
  flights: PropTypes.object,
  flightActions: PropTypes.object
};

export default Flights;
