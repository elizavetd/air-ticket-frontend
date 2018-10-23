import React, { Component } from 'react';
import PropTypes from 'prop-types';
import memoize from 'memoize-one';
import { sortBy } from 'lodash';

import PageHeader from '../Common/PageHeader/PageHeader';
import Table from '../Common/Table/Table';
import EditRow from './EditRow';

import styles from './Airlines.module.scss';

const TABLE_HEADERS = {
  'Name': ['name'],
  'Country': ['country'],
  'IATA code': ['IATAcode'],
  'ICAO code': ['ICAOcode'],
  'Description': ['description']
};

class Airlines extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isAddingAirline: false,
      airlineToAdd: this.initAirlineToAdd(this.props.countries)
    };
  }

  initAirlineToAdd = memoize((countries) => {
    const clearAirline = {
      name: '',
      country: '',
      IATAcode: '',
      ICAOcode: '',
      description: ''
    };

    const initialCountry = countries.length > 0
      ? countries[0]
      : '';

    return {
      ...clearAirline,
      country: initialCountry
    };
  })

  switchAddingAirlineMode = () =>
    this.setState({
      isAddingAirline: !this.state.isAddingAirline,
      airlineToAdd: this.initAirlineToAdd(this.props.countries)
    });

  addNewAirline = (newAirline) => {
    this.props.airlineActions.addAirlineRequest(newAirline);
    this.switchAddingAirlineMode();
  }

  editAirline = (id, newAirline) =>
    this.props.airlineActions.updateAirlineRequest(id, newAirline)

  deleteAirline = (id) =>
    this.props.airlineActions.deleteAirlineRequest(id)

  updateAirlineToAdd = (newData) =>
    this.setState({
      airlineToAdd: {
        ...this.state.airlineToAdd,
        ...newData
      }
    })

  render () {
    const { airlines, countries } = this.props;

    return (
      <div>
        <PageHeader
          title='The list of airlines'
          isButtonDisabled={ this.state.isAddingAirline }
          buttonAction={ this.switchAddingAirlineMode }
        />

        {this.state.isAddingAirline &&
          <div className={ styles.form }>
            <div className='field'>
              <label className='label'>Country:</label>

              <div className='select' type='text'>
                <select
                  value={ this.state.airlineToAdd.country }
                  onChange={
                    (event) => this.updateAirlineToAdd({ country: event.currentTarget.value })
                  }
                >
                  {countries.map((country, index) =>
                    <option key={ index } value={ country }>{ country }</option>
                  )}
                </select>
              </div>
            </div>

            <div className='field'>
              <label className='label'>Name:</label>
              <input
                className='input'
                type='text'
                value={ this.state.airlineToAdd.name }
                onChange={
                  (event) => this.updateAirlineToAdd({ name: event.currentTarget.value })
                }
              />
            </div>

            <div className='field'>
              <label className='label'>IATA code:</label>
              <input
                className='input'
                type='text'
                value={ this.state.airlineToAdd.IATAcode }
                onChange={
                  (event) => this.updateAirlineToAdd({ IATAcode: event.currentTarget.value })
                }
              />
            </div>

            <div className='field'>
              <label className='label'>ICAO code:</label>
              <input
                className='input'
                type='text'
                value={ this.state.airlineToAdd.ICAOcode }
                onChange={
                  (event) => this.updateAirlineToAdd({ ICAOcode: event.currentTarget.value })
                }
              />
            </div>

            <div className='field'>
              <label className='label'>Description:</label>

              <textarea
                className='textarea'
                value={ this.state.airlineToAdd.description }
                onChange={
                  (event) => this.updateAirlineToAdd({ description: event.currentTarget.value })
                }
              />
            </div>

            <div className='field has-text-centered'>
              <button
                className='button is-primary is-radiusless'
                onClick={ () => this.addNewAirline(this.state.airlineToAdd) }
                disabled={ Object.values(this.state.airlineToAdd).includes('') }
              >
                Add airline
              </button>

              <button
                className='button is-danger is-radiusless'
                onClick={ this.switchAddingAirlineMode }
              >
                Cancel
              </button>
            </div>
          </div>
        }

        <Table
          headers={ TABLE_HEADERS }
          items={ sortBy(Object.values(airlines.items), ['name']) }
          editButtons={ true }
          onDelete={ this.deleteAirline }
        >
          <EditRow
            countries={ countries }
            onEdit={ this.editAirline }
          />
        </Table>
      </div>
    );
  }
}

Airlines.propTypes = {
  airlines: PropTypes.object.isRequired,
  countries: PropTypes.array,
  airlineActions: PropTypes.object.isRequired
};

export default Airlines;
