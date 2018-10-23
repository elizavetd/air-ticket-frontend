export const FETCH_AIRLINES_REQUEST = 'FETCH_AIRLINES_REQUEST';
export const FETCH_AIRLINES_SUCCESS = 'FETCH_AIRLINES_SUCCESS';
export const ADD_AIRLINE_REQUEST = 'ADD_AIRLINE_REQUEST';
export const ADD_AIRLINE_SUCCESS = 'ADD_AIRLINE_SUCCESS';
export const DELETE_AIRLINE_REQUEST = 'DELETE_AIRLINE_REQUEST';
export const DELETE_AIRLINE_SUCCESS = 'DELETE_AIRLINE_SUCCESS';
export const UPDATE_AIRLINE_REQUEST = 'UPDATE_AIRLINE_REQUEST';
export const UPDATE_AIRLINE_SUCCESS = 'UPDATE_AIRLINE_SUCCESS';
export const AIRLINE_REQUEST_FAILURE = 'AIRLINE_REQUEST_FAILURE';

export const fetchAirlinesRequest = () => ({
  type: FETCH_AIRLINES_REQUEST
});

export const fetchAirlinesSuccess = (airlines) => ({
  type: FETCH_AIRLINES_SUCCESS,
  payload: {
    airlines
  }
});

export const addAirlineRequest = (airline) => ({
  type: ADD_AIRLINE_REQUEST,
  payload: {
    airline
  }
});

export const addAirlineSuccess = (airline) => ({
  type: ADD_AIRLINE_SUCCESS,
  payload: {
    airline
  }
});

export const deleteAirlineRequest = (id) => ({
  type: DELETE_AIRLINE_REQUEST,
  payload: {
    id
  }
});

export const deleteAirlineSuccess = (id) => ({
  type: DELETE_AIRLINE_SUCCESS,
  payload: {
    id
  }
});

export const updateAirlineRequest = (id, newAirline) => ({
  type: UPDATE_AIRLINE_REQUEST,
  payload: {
    id,
    newAirline
  }
});

export const updateAirlineSuccess = (newAirline) => ({
  type: UPDATE_AIRLINE_SUCCESS,
  payload: {
    airline: newAirline
  }
});

export const airlineRequestFailure = (error) => ({
  type: AIRLINE_REQUEST_FAILURE,
  payload: {
    error
  }
});
