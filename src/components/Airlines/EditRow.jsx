import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Airlines.module.scss';

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
            placeholder='Airline name'
            onChange={(event) => this.updateRowData({ name: event.currentTarget.value })}
          />
        </td>

        <td>
          <div className={`select ${styles.basic_input}`} type='text'>
            <select
              value={ this.state.currentRow.country }
              onChange={(event) => this.updateRowData({ country: event.currentTarget.value })}
            >
              {countries.map((country, index) =>
                <option key={ index } value={ country }>{ country }</option>
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
          <textarea
            className='textarea'
            value={ this.state.currentRow.description }
            onChange={(event) => this.updateRowData({ description: event.currentTarget.value })}
          />
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
