import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Table.module.scss';

class Table extends Component {
  constructor () {
    super();

    this.state = {
      inEditMode: {}
    };
  }

  switchEditMode = (item) => {
    let updatedEditMode = this.state.inEditMode;

    if (updatedEditMode[item._id]) {
      Reflect.deleteProperty(updatedEditMode, item._id);
    } else {
      updatedEditMode = {
        ...updatedEditMode,
        [item._id]: item
      };
    }

    this.setState({
      inEditMode: updatedEditMode
    });
  }

  getTableCell = (headers, row, column) =>
    headers[column].reduce((accumulator, currentValue) => {
      const prevValue = accumulator === '' ? accumulator : `${accumulator}, `;
      const nextValue = row[currentValue] || '';

      return prevValue + nextValue;
    }, '')

  render () {
    const {
      headers,
      items,
      editButtons,
      onDelete
    } = this.props;

    return (
      <table className='table is-striped is-fullwidth'>
        <thead>
          <tr>
            {Object.keys(headers).map((header, index) =>
              <th key={ index } className={ styles.column }>{ header }</th>
            )}

            {editButtons &&
              <th className={ styles.edit_buttons_column }></th>
            }
          </tr>
        </thead>
        <tbody>
          {items.length === 0
            ? <tr>
              <td colSpan={ Object.keys(headers) }>Loading...</td>
            </tr>
            : items.map((row, index) => (
              this.state.inEditMode[row._id]
                ? React.Children.map(this.props.children, (child, index) =>
                  React.cloneElement(child, {
                    index,
                    rowData: row,
                    switchEditMode: this.switchEditMode
                  })
                )
                : <tr key={ index }>
                  {Object.keys(headers).map((column, index) => (
                    index === 0
                      ? <th key={index}>{ this.getTableCell(headers, row, column) }</th>
                      : <td key={index}>{ this.getTableCell(headers, row, column) }</td>
                  ))}

                  {editButtons &&
                    <td>
                      <button
                        className='button is-small is-text'
                        onClick={ () => this.switchEditMode(row) }
                      >
                        <span className='icon is-small'>
                          <i className='fas fa-pencil-alt'></i>
                        </span>
                      </button>

                      <button
                        className='button is-small is-text'
                        onClick={ () => onDelete(row._id) }
                      >
                        <span className='icon is-small'>
                          <i className='fas fa-trash-alt'></i>
                        </span>
                      </button>
                    </td>
                  }
                </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  headers: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  editButtons: PropTypes.bool,
  onDelete: PropTypes.func
};

export default Table;
