import React, { Component } from 'react';
import PropTypes from 'prop-types';
import memoize from 'memoize-one';
import { getCountryTimezones } from '../../helpers/airportHelpers';

import PageHeader from '../Common/PageHeader/PageHeader';
import Table from '../Common/Table/Table';
import EditRow from './EditRow';

import styles from './Airports.module.scss';

const TABLE_HEADERS = {
  'Name': ['name'],
  'Location': ['city', 'country'],
  'IATA code': ['IATAcode'],
  'ICAO code': ['ICAOcode'],
  'Timezone': ['timezone']
};

class Airports extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isAddingAirport: false,
      airportToAdd: this.initAirportToAdd(this.props.countries)
    };
  }

  getCurrentTimezones = memoize(getCountryTimezones)

  initAirportToAdd = memoize((countries) => {
    const clearAirport = {
      name: '',
      country: '',
      city: '',
      IATAcode: '',
      ICAOcode: '',
      timezone: ''
    };

    const initialCountry = countries.length > 0
      ? countries[0].name
      : '';

    const initialTimezone = countries.length > 0
      ? this.getCurrentTimezones(countries, initialCountry)[0]
      : '';

    return {
      ...clearAirport,
      country: initialCountry,
      timezone: initialTimezone
    };
  })

  switchAddingAirportMode = () =>
    this.setState({
      isAddingAirport: !this.state.isAddingAirport,
      airportToAdd: this.initAirportToAdd(this.props.countries)
    });

  addNewAirport = (newAirport) => {
    this.props.airportActions.addAirportRequest(newAirport);
    this.switchAddingAirportMode();
  }

  editAirport = (id, newAirport) =>
    this.props.airportActions.updateAirportRequest(id, newAirport)

  deleteAirport = (id) =>
    this.props.airportActions.deleteAirportRequest(id)

  updateAirportToAdd = (newData) => {
    let updatedTimezone = newData.timezone;

    if (newData.country) {
      const timezones = this.getCurrentTimezones(this.props.countries, newData.country)[0];
      updatedTimezone = timezones[0];
    }

    this.setState({
      airportToAdd: {
        ...this.state.airportToAdd,
        ...newData,
        timezone: updatedTimezone
      }
    });
  }

  render () {
    const { airports, countries } = this.props;
    const timezones = this.getCurrentTimezones(countries, this.state.airportToAdd.country);

    return (
      <div>
        <PageHeader
          title='The list of airports'
          isButtonDisabled={ this.state.isAddingAirport }
          buttonAction={ this.switchAddingAirportMode }
        />

        {this.state.isAddingAirport &&
          <div className={ styles.form }>
            <div className='field'>
              <label className='label'>Country:</label>

              <div className='select' type='text'>
                <select
                  value={ this.state.airportToAdd.country }
                  onChange={
                    (event) => this.updateAirportToAdd({ country: event.currentTarget.value })
                  }
                >
                  {countries.map((country, index) =>
                    <option key={ index } value={ country.name }>{ country.name }</option>
                  )}
                </select>
              </div>
            </div>

            <div className='field'>
              <label className='label'>City:</label>
              <input
                className='input'
                type='text'
                value={ this.state.airportToAdd.city }
                onChange={
                  (event) => this.updateAirportToAdd({ city: event.currentTarget.value })
                }
              />
            </div>

            <div className='field'>
              <label className='label'>Name:</label>
              <input
                className='input'
                type='text'
                value={ this.state.airportToAdd.name }
                onChange={
                  (event) => this.updateAirportToAdd({ name: event.currentTarget.value })
                }
              />
            </div>

            <div className='field'>
              <label className='label'>IATA code:</label>
              <input
                className='input'
                type='text'
                value={ this.state.airportToAdd.IATAcode }
                onChange={
                  (event) => this.updateAirportToAdd({ IATAcode: event.currentTarget.value })
                }
              />
            </div>

            <div className='field'>
              <label className='label'>ICAO code:</label>
              <input
                className='input'
                type='text'
                value={ this.state.airportToAdd.ICAOcode }
                onChange={
                  (event) => this.updateAirportToAdd({ ICAOcode: event.currentTarget.value })
                }
              />
            </div>

            <div className='field'>
              <label className='label'>Timezone:</label>

              <div className='select' type='text'>
                <select
                  value={ this.state.airportToAdd.timezone }
                  onChange={
                    (event) => this.updateAirportToAdd({ timezone: event.currentTarget.value })
                  }
                >
                  {timezones.map((timezone, index) =>
                    <option key={ index } value={ timezone }>{ timezone }</option>
                  )}
                </select>
              </div>
            </div>

            <div className='field has-text-centered'>
              <button
                className='button is-primary is-radiusless'
                onClick={ () => this.addNewAirport(this.state.airportToAdd) }
                disabled={ Object.values(this.state.airportToAdd).includes('') }
              >
                Add airport
              </button>

              <button
                className='button is-danger is-radiusless'
                onClick={ this.switchAddingAirportMode }
              >
                Cancel
              </button>
            </div>
          </div>
        }

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
