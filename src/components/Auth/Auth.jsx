import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// import styles from './Auth.module.scss';

const initLoginData = {
  email: '',
  password: ''
};

const initSignupData = {
  name: '',
  email: '',
  password: ''
};

class Auth extends Component {
  constructor () {
    super();

    this.state = {
      isSignup: false,
      loginData: initLoginData,
      signupData: initSignupData
    };
  }

  switchTab = (value) => {
    this.setState({
      isSignup: value,
      loginData: initLoginData,
      signupData: initSignupData
    });
  }

  changeLoginData = (data) =>
    this.setState({
      loginData: {
        ...this.state.loginData,
        ...data
      }
    })

  changeSignupData = (data) =>
    this.setState({
      loginData: {
        ...this.state.signupData,
        ...data
      }
    })

  handleLogin = () => {
    const { email, password } = this.state.loginData;

    this.props.authActions.loginRequest(email, password);
    this.props.history.push('/flights');
  }

  handleSignup = () => {
    console.log('signup');
  }

  render () {
    const loginTabClass = classnames({'is-active': !this.state.isSignup});
    const signupTabClass = classnames({'is-active': this.state.isSignup});

    return (
      <div>
        <div className='tabs is-centered is-medium'>
          <ul>
            <li className={ loginTabClass } onClick={ () => this.switchTab(false) }>
              {/* eslint-disable-next-line */}
              <a>Log in</a>
            </li>
            <li className={ signupTabClass } onClick={ () => this.switchTab(true) }>
              {/* eslint-disable-next-line */}
              <a>Sign up</a>
            </li>
          </ul>
        </div>

        {this.state.isSignup
          ? <div>
            <div className='field'>
              <label className='label'>Name</label>

              <div className='control has-icons-left'>
                <input className='input' type='text'/>
                <span className='icon is-small is-left'>
                  <i className='fas fa-user' />
                </span>
              </div>
            </div>

            <div className='field'>
              <label className='label'>Email</label>

              <div className='control has-icons-left'>
                <input className='input' type='email'/>
                <span className='icon is-small is-left'>
                  <i className='fas fa-envelope' />
                </span>
              </div>
            </div>

            <div className='field'>
              <label className='label'>Password</label>

              <div className='control has-icons-left'>
                <input className='input' type='password'/>
                <span className='icon is-small is-left'>
                  <i className='fas fa-lock' />
                </span>
              </div>
            </div>

            <div className='field'>
              <label className='label'>Confirm Password</label>

              <div className='control has-icons-left'>
                <input className='input' type='password'/>
                <span className='icon is-small is-left'>
                  <i className='fas fa-lock' />
                </span>
              </div>
            </div>

            <div className='field'>
              <p className='control has-text-centered'>
                <button
                  className='button is-success is-radiusless'
                  onClick={this.handleSignup}
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>

          : <div>
            <div className='field'>
              <label className='label'>Email</label>

              <div className='control has-icons-left'>
                <input
                  className='input'
                  type='email'
                  onChange={(event) => this.changeLoginData({
                    email: event.currentTarget.value
                  })}
                />
                <span className='icon is-small is-left'>
                  <i className='fas fa-envelope' />
                </span>
              </div>
            </div>

            <div className='field'>
              <label className='label'>Password</label>

              <div className='control has-icons-left'>
                <input
                  className='input'
                  type='password'
                  onChange={(event) => this.changeLoginData({
                    password: event.currentTarget.value
                  })}
                />
                <span className='icon is-small is-left'>
                  <i className='fas fa-lock' />
                </span>
              </div>
            </div>

            <div className='field'>
              <p className='control has-text-centered'>
                <button
                  className='button is-success is-radiusless'
                  onClick={this.handleLogin}
                >
                  Log In
                </button>
              </p>
            </div>
          </div>
        }
      </div>
    );
  }
}

Auth.propTypes = {
  user: PropTypes.object,
  authActions: PropTypes.object
};

export default withRouter(Auth);
