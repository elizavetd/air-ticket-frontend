import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { find } from 'lodash';

import styles from './Airports.module.scss';

const UTF0 = '+00:00';

class EditRow extends Component {
  constructor (props) {
    super(props);

    this.state = {
      currentRow: this.props.rowData
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
      countries,
      onEdit
    } = this.props;

    return (
      <tr>
        <td>
          <input
            className={`input ${styles.basic_input}`}
            type='text'
            value={ this.state.currentRow.name }
            placeholder='Airport name'
            onChange={(event) => this.updateRowData({ name: event.currentTarget.value })}
          />
        </td>

        <td>
          <div className='field'>
            <label className='label'>Country:</label>

            <div className={`select ${styles.basic_input}`} type='text'>
              <select
                value={ this.state.currentRow.country }
                onChange={(event) => this.updateRowData({ country: event.currentTarget.value })}
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
              className={`input ${styles.basic_input}`}
              type='text'
              value={ this.state.currentRow.city }
              placeholder='City'
              onChange={(event) => this.updateRowData({ city: event.currentTarget.value })}
            />
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
          <div className='select' type='text'>
            <select
              value={ this.state.currentRow.timezone }
              onChange={(event) => this.updateRowData({ timezone: event.currentTarget.value })}
            >
              {find(countries, { name: this.state.currentRow.country }).timezones
                .map((item, index) => {
                  const timezone = item.replace('UTC', '') || UTF0;

                  return <option key={ index } value={ timezone }>{ timezone }</option>;
                })
              }
            </select>
          </div>
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
  countries: PropTypes.array,
  onEdit: PropTypes.func
};

export default EditRow;
