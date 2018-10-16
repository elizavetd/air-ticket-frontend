import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import PageHeader from '../Common/PageHeader/PageHeader';
import Table from '../Common/Table/Table';

// import styles from './Airports.module.scss';

class Airports extends Component {
  editAirport = (id) => {
    console.log(`edit ${id}`);
  }

  deleteAirport = (id) => {
    console.log(`delete ${id}`);
  }

  render () {
    const { airports } = this.props;

    const airportItems = isEmpty(airports.items)
      ? []
      : Object.values(airports.items).map((airport) => ({
        id: airport._id,
        cells: [
          airport.name,
          `${airport.city}, ${airport.country}`,
          airport.IATAcode,
          airport.ICAOcode,
          airport.timezone
        ]
      }));

    const tableItems = {
      headers: ['Name', 'Location', 'IATA code', 'ICAO code', 'Timezone'],
      rows: airportItems
    };

    return (
      <div>
        <PageHeader title='The list of airports' />

        <Table
          items={ tableItems }
          editButtons={ true }
          onEdit={ this.editAirport }
          onDelete={ this.deleteAirport }
        />
      </div>
    );
  }
}

Airports.propTypes = {
  airports: PropTypes.object.isRequired,
  airportActions: PropTypes.object.isRequired
};

export default Airports;
