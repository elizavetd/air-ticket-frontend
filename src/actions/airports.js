export const FETCH_AIRPORTS_REQUEST = 'FETCH_AIRPORTS_REQUEST';
export const FETCH_AIRPORTS_SUCCESS = 'FETCH_AIRPORTS_SUCCESS';
export const ADD_AIRPORT_REQUEST = 'ADD_AIRPORT_REQUEST';
export const ADD_AIRPORT_SUCCESS = 'ADD_AIRPORT_SUCCESS';
export const DELETE_AIRPORT_REQUEST = 'DELETE_AIRPORT_REQUEST';
export const DELETE_AIRPORT_SUCCESS = 'DELETE_AIRPORT_SUCCESS';
export const UPDATE_AIRPORT_REQUEST = 'UPDATE_AIRPORT_REQUEST';
export const UPDATE_AIRPORT_SUCCESS = 'UPDATE_AIRPORT_SUCCESS';
export const AIRPORT_FAILURE = 'AIRPORT_FAILURE';

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

export const deleteAirportRequest = (airport) => ({
    type: DELETE_AIRPORT_REQUEST,
    payload: {
      airport
    }
});

export const deleteAirportSuccess = (airport) => ({
    type: DELETE_AIRPORT_SUCCESS,
    payload: {
      airport
    }
});

export const updateAirportRequest = (airport) => ({
    type: UPDATE_AIRPORT_REQUEST,
    payload: {
      airport
    }
});

export const updateAirportSuccess = (airport) => ({
    type: UPDATE_AIRPORT_SUCCESS,
    payload: {
      airport
    }
});

export const airportFailure = (error) => ({
    type: AIRPORT_FAILURE,
    payload: {
      error
    }
});
