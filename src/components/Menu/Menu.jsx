import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { capitalize, kebabCase } from 'lodash';
import classnames from 'classnames';

import styles from './Menu.module.scss';

const MENU_ITEMS = [
  'My account',
  'My bookings',
  'Airlines',
  'Airplanes',
  'Airports',
  'Flights'
];

class Menu extends Component {
  render () {
    return (
      <aside className={ classnames('column', 'is-one-quarter', styles.menu_container) }>
        <div className='menu'>
          <ul className='menu-list'>
            {MENU_ITEMS.map((menuItem, index) =>
              <li key={ index }>
                <NavLink
                  to={ `/${kebabCase(menuItem)}` }
                  activeClassName='is-active'
                >
                  { capitalize(menuItem) }
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </aside>
    );
  }
}

export default Menu;
