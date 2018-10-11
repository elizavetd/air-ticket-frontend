import React, { Component } from 'react';
import classnames from 'classnames';

import Menu from '../Menu/Menu';
import Routes from '../Routes/Routes';

import styles from './App.module.scss';

class App extends Component {
  render () {
    return (
      <div className={ classnames('columns', 'app', styles.app)}>
        <Menu />

        <section className='column tile is-info'>
          <Routes />
        </section>
      </div>
    );
  }
}

export default App;
