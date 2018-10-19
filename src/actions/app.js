export const INITIALIZATION = 'INITIALIZATION';
export const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';
export const GET_COUNTRIES_FAILURE = 'GET_COUNTRIES_FAILURE';

export const initialization = () => ({
  type: INITIALIZATION
});

export const getCountriesSuccess = (countries) => ({
  type: GET_COUNTRIES_SUCCESS,
  payload: {
    countries
  }
});

export const getCountriesFailure = (error) => ({
  type: GET_COUNTRIES_FAILURE,
  payload: {
    error
  }
});
