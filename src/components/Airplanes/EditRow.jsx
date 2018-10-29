import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Airplanes.module.scss';

class EditRow extends Component {
  constructor (props) {
    super(props);

    this.state = {
      currentRow: {
        ...this.props.rowData,
        airline: this.props.rowData.airline || this.props.airlines[0]._id
      }
    };
  }

  updateRowData = (newData) => {
    this.setState({
      currentRow: {
        ...this.state.currentRow,
        ...newData
      }
    });
  }

  render () {
    const {
      rowData,
      switchEditMode,
      airlines,
      onEdit
    } = this.props;

    return (
      <tr>
        <td>
          <input
            className={`input ${styles.basic_input}`}
            type='text'
            value={ this.state.currentRow.name }
            placeholder='Airplane name'
            onChange={(event) => this.updateRowData({ name: event.currentTarget.value })}
          />
        </td>

        <td>
          <div className={`select ${styles.basic_input}`} type='text'>
            <select
              value={ this.state.currentRow.airline._id }
              onChange={(event) => this.updateRowData({ airline: event.currentTarget.value })}
            >
              {airlines.map((airline, index) =>
                <option key={ index } value={ airline._id }>{ airline.name }</option>
              )}
            </select>
          </div>
        </td>

        <td>
          <input
            className={`input ${styles.code_input}`}
            type='text'
            value={ this.state.currentRow.IATAcode }
            placeholder='IATA'
            onChange={(event) => this.updateRowData({ IATAcode: event.currentTarget.value })}
          />
        </td>

        <td>
          <input
            className={`input ${styles.code_input}`}
            type='text'
            value={ this.state.currentRow.ICAOcode }
            placeholder='ICAO'
            onChange={(event) => this.updateRowData({ ICAOcode: event.currentTarget.value })}
          />
        </td>

        <td>
          {this.state.currentRow.seats.length > 0 &&
          this.state.currentRow.seats.map((type, index) =>
            <div className='field is-flex' key={ index }>
              <input
                className='input'
                type='text'
                value={ type.class }
                onChange={
                  (event) =>
                    this.updateRowData({
                      seats: [
                        ...this.state.currentRow.seats.slice(0, index),
                        {
                          ...this.state.currentRow.seats[index],
                          class: event.currentTarget.value
                        },
                        ...this.state.currentRow.seats.slice(
                          index + 1,
                          this.state.currentRow.seats.length
                        )
                      ]
                    })
                }
              />

              <input
                className='input'
                type='number'
                value={ type.numberOfSeats }
                onChange={
                  (event) =>
                    this.updateRowData({
                      seats: [
                        ...this.state.currentRow.seats.slice(0, index),
                        {
                          ...this.state.currentRow.seats[index],
                          numberOfSeats: event.currentTarget.value
                        },
                        ...this.state.currentRow.seats.slice(
                          index + 1,
                          this.state.currentRow.seats.length
                        )
                      ]
                    })
                }
              />
            </div>
          )}

          <button
            className='button is-primary is-radiusless'
            onClick={ () => this.updateRowData({
              seats: [
                ...this.state.currentRow.seats,
                {
                  class: '',
                  numberOfSeats: 0
                }
              ]
            }) }
          >
            Add new class
          </button>
        </td>

        <td>
          <button
            className='button is-small is-text'
            onClick={() => {
              onEdit(rowData._id, this.state.currentRow);
              switchEditMode(rowData);
            }}
          >
            <span className='icon is-small'>
              <i className='fas fa-check'></i>
            </span>
          </button>

          <button
            className='button is-small is-text'
            onClick={() => switchEditMode(rowData)}
          >
            <span className='icon is-small'>
              <i className='fas fa-times'></i>
            </span>
          </button>
        </td>
      </tr>
    );
  }
}

EditRow.propTypes = {
  rowData: PropTypes.object,
  switchEditMode: PropTypes.func,
  airlines: PropTypes.array,
  onEdit: PropTypes.func
};

export default EditRow;
