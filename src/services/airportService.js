import axios from '../config/network';

export const getAirports = () =>
  axios
    .get('/airports')
    .then((response) => {
      const airports = {};

      for (let i = 0; i < response.data.length; i++) {
        airports[response.data[i]._id] = response.data[i];
      }

      return airports;
    })
    .catch((error) => {
      throw error;
    });

export const editAirport = (id, newAirport) =>
  axios
    .post(`/airports/${id}`, newAirport)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export const deleteAirport = (id) =>
  axios
    .delete(`/airports/${id}`)
    .then((response) => response.data._id)
    .catch((error) => {
      throw error;
    });
