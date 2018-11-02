import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/auth';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  authorized: Boolean(user),
  user,
  loggingIn: false,
  error: ''
};

export default function authState (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        authorized: false,
        user: null,
        loggingIn: true,
        error: ''
      };
    }
    case LOGIN_SUCCESS: {
      return {
        authorized: true,
        user: action.payload.userData,
        loggingIn: true,
        error: ''
      };
    }
    case LOGIN_FAILURE: {
      return {
        authorized: false,
        user: null,
        loggingIn: false,
        error: action.payload.error
      };
    }
    case LOGOUT: {
      return {
        authorized: false,
        user: null,
        loggingIn: false,
        error: ''
      };
    }
    default:
      return state;
  }
}
