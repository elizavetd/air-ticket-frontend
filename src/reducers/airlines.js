import {
  FETCH_AIRLINES_REQUEST,
  FETCH_AIRLINES_SUCCESS,
  ADD_AIRLINE_REQUEST,
  ADD_AIRLINE_SUCCESS,
  DELETE_AIRLINE_REQUEST,
  DELETE_AIRLINE_SUCCESS,
  UPDATE_AIRLINE_REQUEST,
  UPDATE_AIRLINE_SUCCESS,
  AIRLINE_REQUEST_FAILURE
} from '../actions/airlines';

const DEFAULT_STATE = {
  loading: false,
  saving: false,
  error: '',
  items: {}
};

export default function airlineState (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_AIRLINES_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case FETCH_AIRLINES_SUCCESS: {
      return {
        ...state,
        items: action.payload.airlines,
        loading: false
      };
    }
    case ADD_AIRLINE_REQUEST: {
      return {
        ...state,
        saving: true
      };
    }
    case ADD_AIRLINE_SUCCESS: {
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.airline._id]: action.payload.airline
        },
        saving: false
      };
    }
    case DELETE_AIRLINE_REQUEST: {
      return {
        ...state,
        saving: true
      };
    }
    case DELETE_AIRLINE_SUCCESS: {
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
    case UPDATE_AIRLINE_REQUEST: {
      return {
        ...state,
        saving: true
      };
    }
    case UPDATE_AIRLINE_SUCCESS: {
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.airline._id]: action.payload.airline
        },
        saving: false
      };
    }
    case AIRLINE_REQUEST_FAILURE: {
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
