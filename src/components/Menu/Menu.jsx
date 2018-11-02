import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { capitalize, kebabCase } from 'lodash';
import classnames from 'classnames';

import styles from './Menu.module.scss';

const MENU_ITEMS = [
  // 'My account',
  'My bookings',
  'Airlines',
  'Airplanes',
  'Airports',
  'Flights'
];

class Menu extends Component {
  render () {
    const { auth, authActions } = this.props;

    const menuContainerClasses = classnames(
      'column',
      'is-one-quarter',
      'is-paddingless',
      styles.menu_container
    );

    const authButtonClasses = classnames(
      'button',
      'is-radiusless',
      'is-inverted',
      'is-outlined'
    );

    return (
      <aside className={ menuContainerClasses } >
        <div className='menu is-medium'>
          {!auth.authorized &&
            <div className={`${styles.auth_buttons} is-flex`}>
              <NavLink
                to='/auth'
                className={`${styles.login_button} ${authButtonClasses} is-primary`}
              >
                Log in
              </NavLink>

              <NavLink
                to='/auth'
                className={`${styles.signup_button} ${authButtonClasses} is-info`}
              >
                Sign up
              </NavLink>
            </div>
          }

          {auth.authorized &&
            <div className={ styles.user_info }>
              <figure className='image is-128x128'>
                <img
                  className='is-rounded'
                  src={`https://ui-avatars.com/api/?size=128&name=${auth.user.name}`}
                  alt=''
                />
              </figure>

              <p className={ styles.greeting }>
                {`Welcome, ${auth.user.name}!`}
              </p>

              <div className={`${styles.auth_buttons} is-flex`}>
                <NavLink
                  to='/my-account'
                  className={`${styles.login_button} ${authButtonClasses} is-link`}
                >
                  My account
                </NavLink>

                <button
                  className={`${styles.signup_button} ${authButtonClasses} is-danger`}
                  onClick={ () => authActions.logout() }
                >
                  Log out
                </button>
              </div>
            </div>
          }

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
