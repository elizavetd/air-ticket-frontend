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
    const menuContainerClasses = classnames(
      'column',
      'is-one-quarter',
      'is-paddingless',
      styles.menu_container
    );

    return (
      <aside className={ menuContainerClasses } >
        <div className='menu is-medium'>
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
