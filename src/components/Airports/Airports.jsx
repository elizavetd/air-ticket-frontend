import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PageHeader from '../Common/PageHeader/PageHeader';
import Table from '../Common/Table/Table';
import EditRow from './EditRow';

// import styles from './Airports.module.scss';

const TABLE_HEADERS = {
  'Name': ['name'],
  'Location': ['city', 'country'],
  'IATA code': ['IATAcode'],
  'ICAO code': ['ICAOcode'],
  'Timezone': ['timezone']
};

class Airports extends Component {
  editAirport = (id, newAirport) => {
    this.props.airportActions.updateAirportRequest(id, newAirport);
  }

  deleteAirport = (id) => {
    this.props.airportActions.deleteAirportRequest(id);
  }

  render () {
    const { airports, countries } = this.props;

    return (
      <div>
        <PageHeader title='The list of airports' />

        <Table
          headers={ TABLE_HEADERS }
          items={ Object.values(airports.items) }
          editButtons={ true }
          onDelete={ this.deleteAirport }
        >
          <EditRow
            countries={ countries }
            onEdit={ this.editAirport }
          />
        </Table>
      </div>
    );
  }
}

Airports.propTypes = {
  airports: PropTypes.object.isRequired,
  countries: PropTypes.array,
  airportActions: PropTypes.object.isRequired
};

export default Airports;
