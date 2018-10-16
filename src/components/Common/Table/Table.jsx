import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
  render () {
    const {
      items,
      editButtons,
      onEdit,
      onDelete
    } = this.props;

    return (
      <table className='table is-striped is-fullwidth'>
        <thead>
          <tr>
            {items.headers.map((header, index) =>
              <th key={ index }>{ header }</th>
            )}

            {editButtons &&
              <th></th>
            }
          </tr>
        </thead>
        <tbody>
          
            {items.rows.map((row, index) =>
              <tr key={ index }>
                {row.cells.map((cell, index) => (
                  index === 0
                    ? <th key={ index }>{ cell }</th>
                    : <td key={ index }>{ cell }</td>
                ))}

                {editButtons &&
                  <td>
                    <button
                      className='button is-small is-text'
                      onClick={ () => onEdit(row.id) }
                    >
                      <span className='icon is-small'>
                        <i className='fas fa-pencil-alt'></i>
                      </span>
                    </button>

                    <button
                      className='button is-small is-text'
                      onClick={ () => onDelete(row.id) }
                    >
                      <span className='icon is-small'>
                        <i className='fas fa-trash-alt'></i>
                      </span>
                    </button>
                  </td>
                }
              </tr>
            )}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  items: PropTypes.object.isRequired,
  editButtons: PropTypes.bool,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};

export default Table;
