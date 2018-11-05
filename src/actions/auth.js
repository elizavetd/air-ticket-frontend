import { logout as performLogout } from '../services/authService';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const LOGOUT = 'LOGOUT';

export const loginRequest = (email, password) => ({
  type: LOGIN_REQUEST,
  payload: {
    email,
    password
  }
});

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: {
    userData
  }
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: {
    error
  }
});

export const signupRequest = (name, email, password) => ({
  type: SIGNUP_REQUEST,
  payload: {
    name,
    email,
    password
  }
});

export const signupSuccess = (userData) => ({
  type: SIGNUP_SUCCESS,
  payload: {
    userData
  }
});

export const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: {
    error
  }
});

export const logout = () => {
  performLogout();

  return {
    type: LOGOUT
  };
};
