import {
  FETCH_AIRPLANES_REQUEST,
  FETCH_AIRPLANES_SUCCESS,
  ADD_AIRPLANE_REQUEST,
  ADD_AIRPLANE_SUCCESS,
  DELETE_AIRPLANE_REQUEST,
  DELETE_AIRPLANE_SUCCESS,
  UPDATE_AIRPLANE_REQUEST,
  UPDATE_AIRPLANE_SUCCESS,
  AIRPLANE_REQUEST_FAILURE
} from '../actions/airplanes';

const DEFAULT_STATE = {
  loading: false,
  saving: false,
  error: '',
  items: {}
};

export default function airplaneState (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_AIRPLANES_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case FETCH_AIRPLANES_SUCCESS: {
      return {
        ...state,
        items: action.payload.airplanes,
        loading: false
      };
    }
    case ADD_AIRPLANE_REQUEST: {
      return {
        ...state,
        saving: true
      };
    }
    case ADD_AIRPLANE_SUCCESS: {
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.airplane._id]: action.payload.airplane
        },
        saving: false
      };
    }
    case DELETE_AIRPLANE_REQUEST: {
      return {
        ...state,
        saving: true
      };
    }
    case DELETE_AIRPLANE_SUCCESS: {
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
    case UPDATE_AIRPLANE_REQUEST: {
      return {
        ...state,
        saving: true
      };
    }
    case UPDATE_AIRPLANE_SUCCESS: {
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.airplane._id]: action.payload.airplane
        },
        saving: false
      };
    }
    case AIRPLANE_REQUEST_FAILURE: {
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
