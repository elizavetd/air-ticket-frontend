export const FETCH_AIRPORTS_REQUEST = 'FETCH_AIRPORTS_REQUEST';
export const FETCH_AIRPORTS_SUCCESS = 'FETCH_AIRPORTS_SUCCESS';
export const ADD_AIRPORT_REQUEST = 'ADD_AIRPORT_REQUEST';
export const ADD_AIRPORT_SUCCESS = 'ADD_AIRPORT_SUCCESS';
export const DELETE_AIRPORT_REQUEST = 'DELETE_AIRPORT_REQUEST';
export const DELETE_AIRPORT_SUCCESS = 'DELETE_AIRPORT_SUCCESS';
export const UPDATE_AIRPORT_REQUEST = 'UPDATE_AIRPORT_REQUEST';
export const UPDATE_AIRPORT_SUCCESS = 'UPDATE_AIRPORT_SUCCESS';
export const AIRPORT_REQUEST_FAILURE = 'AIRPORT_REQUEST_FAILURE';

export const fetchAirportsRequest = () => ({
  type: FETCH_AIRPORTS_REQUEST
});

export const fetchAirportsSuccess = (airports) => ({
  type: FETCH_AIRPORTS_SUCCESS,
  payload: {
    airports
  }
});

export const addAirportRequest = (airport) => ({
  type: ADD_AIRPORT_REQUEST,
  payload: {
    airport
  }
});

export const addAirportSuccess = (airport) => ({
  type: ADD_AIRPORT_SUCCESS,
  payload: {
    airport
  }
});

export const deleteAirportRequest = (id) => ({
  type: DELETE_AIRPORT_REQUEST,
  payload: {
    id
  }
});

export const deleteAirportSuccess = (id) => ({
  type: DELETE_AIRPORT_SUCCESS,
  payload: {
    id
  }
});

export const updateAirportRequest = (id, newAirport) => ({
  type: UPDATE_AIRPORT_REQUEST,
  payload: {
    id,
    newAirport
  }
});

export const updateAirportSuccess = (newAirport) => ({
  type: UPDATE_AIRPORT_SUCCESS,
  payload: {
    airport: newAirport
  }
});

export const airportRequestFailure = (error) => ({
  type: AIRPORT_REQUEST_FAILURE,
  payload: {
    error
  }
});
