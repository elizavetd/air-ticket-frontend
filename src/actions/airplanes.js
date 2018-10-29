export const FETCH_AIRPLANES_REQUEST = 'FETCH_AIRPLANES_REQUEST';
export const FETCH_AIRPLANES_SUCCESS = 'FETCH_AIRPLANES_SUCCESS';
export const ADD_AIRPLANE_REQUEST = 'ADD_AIRPLANE_REQUEST';
export const ADD_AIRPLANE_SUCCESS = 'ADD_AIRPLANE_SUCCESS';
export const DELETE_AIRPLANE_REQUEST = 'DELETE_AIRPLANE_REQUEST';
export const DELETE_AIRPLANE_SUCCESS = 'DELETE_AIRPLANE_SUCCESS';
export const UPDATE_AIRPLANE_REQUEST = 'UPDATE_AIRPLANE_REQUEST';
export const UPDATE_AIRPLANE_SUCCESS = 'UPDATE_AIRPLANE_SUCCESS';
export const AIRPLANE_REQUEST_FAILURE = 'AIRPLANE_REQUEST_FAILURE';

export const fetchAirplanesRequest = () => ({
  type: FETCH_AIRPLANES_REQUEST
});

export const fetchAirplanesSuccess = (airplanes) => ({
  type: FETCH_AIRPLANES_SUCCESS,
  payload: {
    airplanes
  }
});

export const addAirplaneRequest = (airplane) => ({
  type: ADD_AIRPLANE_REQUEST,
  payload: {
    airplane
  }
});

export const addAirplaneSuccess = (airplane) => ({
  type: ADD_AIRPLANE_SUCCESS,
  payload: {
    airplane
  }
});

export const deleteAirplaneRequest = (id) => ({
  type: DELETE_AIRPLANE_REQUEST,
  payload: {
    id
  }
});

export const deleteAirplaneSuccess = (id) => ({
  type: DELETE_AIRPLANE_SUCCESS,
  payload: {
    id
  }
});

export const updateAirplaneRequest = (id, newAirplane) => ({
  type: UPDATE_AIRPLANE_REQUEST,
  payload: {
    id,
    newAirplane
  }
});

export const updateAirplaneSuccess = (newAirplane) => ({
  type: UPDATE_AIRPLANE_SUCCESS,
  payload: {
    airplane: newAirplane
  }
});

export const airplaneRequestFailure = (error) => ({
  type: AIRPLANE_REQUEST_FAILURE,
  payload: {
    error
  }
});
