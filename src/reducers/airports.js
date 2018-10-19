import {
  FETCH_AIRPORTS_REQUEST,
  FETCH_AIRPORTS_SUCCESS,
  ADD_AIRPORT_REQUEST,
  ADD_AIRPORT_SUCCESS,
  DELETE_AIRPORT_REQUEST,
  DELETE_AIRPORT_SUCCESS,
  UPDATE_AIRPORT_REQUEST,
  UPDATE_AIRPORT_SUCCESS,
  AIRPORT_REQUEST_FAILURE
} from '../actions/airports';

const DEFAULT_STATE = {
  loading: false,
  saving: false,
  error: '',
  items: {}
};

export default function airportState (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_AIRPORTS_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case FETCH_AIRPORTS_SUCCESS: {
      return {
        ...state,
        items: action.payload.airports,
        loading: false
      };
    }
    case ADD_AIRPORT_REQUEST: {
      return {
        ...state,
        saving: true
      };
    }
    case ADD_AIRPORT_SUCCESS: {
      return {
        ...state,
        items: {
          ...state.items,
          ...action.payload.airport
        },
        saving: false
      };
    }
    case DELETE_AIRPORT_REQUEST: {
      return {
        ...state,
        saving: true
      };
    }
    case DELETE_AIRPORT_SUCCESS: {
      const itemsCopy = {};

      for (const id in state.items) {
        if (id !== action.payload.id) {
          itemsCopy[id] = state.items[id];
        }
      }

      return {
        ...state,
        items: itemsCopy,
        saving: false
      };
    }
    case UPDATE_AIRPORT_REQUEST: {
      return {
        ...state,
        saving: true
      };
    }
    case UPDATE_AIRPORT_SUCCESS: {
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.airport._id]: action.payload.airport
        },
        saving: false
      };
    }
    case AIRPORT_REQUEST_FAILURE: {
      return {
        ...state,
        loading: false,
        saving: false,
        error: action.payload.error
      };
    }
    default:
      return state;
  }
}
