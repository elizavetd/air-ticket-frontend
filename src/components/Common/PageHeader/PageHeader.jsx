import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './PageHeader.module.scss';

class PageHeader extends Component {
  render () {
    const { title } = this.props;

    return (
      <div className={ `is-flex ${styles.header_container}` }>
        <div>
          <h1 className='title'>{ title }</h1>
        </div>
        <div>
          <button className='button is-radiusless is-primary'>
            <span className='icon'>
              <i className='fas fa-plus'></i>
            </span>
            <span>Add new</span>
          </button>
        </div>
      </div>
    );
  }
}

PageHeader.propTypes = {
  title: PropTypes.string
};

export default PageHeader;
