import {
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAILURE
} from '../actions/app';

const DEFAULT_STATE = {
  countries: [],
  error: ''
};

export default function appState (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case GET_COUNTRIES_SUCCESS: {
      return {
        ...state,
        countries: [
          ...state.countries,
          ...action.payload.countries
        ]
      };
    }
    case GET_COUNTRIES_FAILURE: {
      return {
        ...state,
        error: action.payload.error
      };
    }
    default:
      return state;
  }
}
