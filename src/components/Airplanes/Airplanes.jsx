import React, { Component } from 'react';
import PropTypes from 'prop-types';
import memoize from 'memoize-one';
import { sortBy } from 'lodash';

import PageHeader from '../Common/PageHeader/PageHeader';
import Table from '../Common/Table/Table';
import EditRow from './EditRow';

import styles from './Airplanes.module.scss';

const TABLE_HEADERS = {
  'Name': ['name'],
  'Airline': ['airline.name'],
  'IATA code': ['IATAcode'],
  'ICAO code': ['ICAOcode'],
  'Seats': ['seats'],
  'Gross Weight in Kg': ['grossWeightKg']
};

class Airplanes extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isAddingAirplane: false,
      airplaneToAdd: this.initAirplaneToAdd(this.props.airlines)
    };
  }

  initAirplaneToAdd = memoize((airlines) => {
    const clearAirplane = {
      name: '',
      airline: '',
      IATAcode: '',
      ICAOcode: '',
      seats: [],
      grossWeightKg: 0
    };

    const initialAirline = airlines.length > 0
      ? airlines[0]
      : '';

    return {
      ...clearAirplane,
      airline: initialAirline
    };
  })

  switchAddingAirplaneMode = () =>
    this.setState({
      isAddingAirplane: !this.state.isAddingAirplane,
      airplaneToAdd: this.initAirplaneToAdd(this.props.airlines)
    });

  addNewAirplane = (newAirplane) => {
    this.props.airplaneActions.addAirplaneRequest(newAirplane);
    this.switchAddingAirplaneMode();
  }

  editAirplane = (id, newAirplane) =>
    this.props.airplaneActions.updateAirplaneRequest(id, newAirplane)

  deleteAirplane = (id) =>
    this.props.airplaneActions.deleteAirplaneRequest(id)

  updateAirplaneToAdd = (newData) =>
    this.setState({
      airplaneToAdd: {
        ...this.state.airplaneToAdd,
        ...newData
      }
    });

  renderSeatsCell = (cellData) =>
    cellData.map((item, index) =>
      <div key={ index }>{ item.class }: { item.numberOfSeats }</div>
    )

  render () {
    const { airplanes, airlines } = this.props;

    return (
      <div>
        <PageHeader
          title='The list of airplanes'
          isButtonDisabled={ this.state.isAddingAirplane }
          buttonAction={ this.switchAddingAirplaneMode }
        />

        {this.state.isAddingAirplane &&
          <div className={ styles.form }>
            <div className='field'>
              <label className='label'>Airline:</label>

              <div className='select' type='text'>
                <select
                  value={ this.state.airplaneToAdd.airline._id }
                  onChange={
                    (event) => this.updateAirplaneToAdd({ airline: event.currentTarget.value })
                  }
                >
                  {airlines.map((airline, index) =>
                    <option key={ index } value={ airline._id }>{
                      airline.name
                    }</option>
                  )}
                </select>
              </div>
            </div>

            <div className='field'>
              <label className='label'>Name:</label>
              <input
                className='input'
                type='text'
                value={ this.state.airplaneToAdd.name }
                onChange={
                  (event) => this.updateAirplaneToAdd({ name: event.currentTarget.value })
                }
              />
            </div>

            <div className='field'>
              <label className='label'>IATA code:</label>
              <input
                className='input'
                type='text'
                value={ this.state.airplaneToAdd.IATAcode }
                onChange={
                  (event) => this.updateAirplaneToAdd({ IATAcode: event.currentTarget.value })
                }
              />
            </div>

            <div className='field'>
              <label className='label'>ICAO code:</label>
              <input
                className='input'
                type='text'
                value={ this.state.airplaneToAdd.ICAOcode }
                onChange={
                  (event) => this.updateAirplaneToAdd({ ICAOcode: event.currentTarget.value })
                }
              />
            </div>

            <div className='field'>
              <label className='label'>Seats:</label>

              {this.state.airplaneToAdd.seats.length > 0 &&
              this.state.airplaneToAdd.seats.map((type, index) =>
                <div className='field is-flex' key={ index }>
                  <div className='field'>
                    <label className='label'>Class:</label>
                    <input
                      className='input'
                      type='text'
                      value={ type.class }
                      onChange={
                        (event) =>
                          this.updateAirplaneToAdd({
                            seats: [
                              ...this.state.airplaneToAdd.seats.slice(0, index),
                              {
                                ...this.state.airplaneToAdd.seats[index],
                                class: event.currentTarget.value
                              },
                              ...this.state.airplaneToAdd.seats.slice(
                                index + 1,
                                this.state.airplaneToAdd.seats.length
                              )
                            ]
                          })
                      }
                    />
                  </div>

                  <div className='field'>
                    <label className='label'>Number of Seats:</label>
                    <input
                      className='input'
                      type='number'
                      value={ type.numberOfSeats }
                      onChange={
                        (event) =>
                          this.updateAirplaneToAdd({
                            seats: [
                              ...this.state.airplaneToAdd.seats.slice(0, index),
                              {
                                ...this.state.airplaneToAdd.seats[index],
                                numberOfSeats: event.currentTarget.value
                              },
                              ...this.state.airplaneToAdd.seats.slice(
                                index + 1,
                                this.state.airplaneToAdd.seats.length
                              )
                            ]
                          })
                      }
                    />
                  </div>
                </div>
              )}

              <button
                className='button is-primary is-radiusless'
                onClick={ () => this.updateAirplaneToAdd({
                  seats: [
                    ...this.state.airplaneToAdd.seats,
                    {
                      class: '',
                      numberOfSeats: 0
                    }
                  ]
                }) }
              >
                Add new class
              </button>
            </div>

            <div className='field'>
              <label className='label'>Gross Weight in Kg:</label>

              <input
                className='input'
                type='number'
                value={ this.state.airplaneToAdd.grossWeightKg }
                onChange={
                  (event) => this.updateAirplaneToAdd({ grossWeightKg: event.currentTarget.value })
                }
              />
            </div>

            <div className='field has-text-centered'>
              <button
                className='button is-primary is-radiusless'
                onClick={ () => this.addNewAirplane(this.state.airplaneToAdd) }
                disabled={ Object.values(this.state.airplaneToAdd).includes('') }
              >
                Add airplane
              </button>

              <button
                className='button is-danger is-radiusless'
                onClick={ this.switchAddingAirplaneMode }
              >
                Cancel
              </button>
            </div>
          </div>
        }

        <Table
          headers={ TABLE_HEADERS }
          items={ sortBy(Object.values(airplanes.items), ['name']) }
          specialColumns={{ 'Seats': this.renderSeatsCell }}
          editButtons={ true }
          onDelete={ this.deleteAirplane }
        >
          <EditRow
            airlines={ airlines }
            onEdit={ this.editAirplane }
          />
        </Table>
      </div>
    );
  }
}

Airplanes.propTypes = {
  airplanes: PropTypes.object.isRequired,
  airlines: PropTypes.array.isRequired,
  airplaneActions: PropTypes.object.isRequired
};

export default Airplanes;
