import axios from '../config/network';

export const getAirlines = () =>
  axios
    .get('/airlines')
    .then((response) => {
      const airlines = {};

      for (let i = 0; i < response.data.length; i++) {
        airlines[response.data[i]._id] = response.data[i];
      }

      return airlines;
    })
    .catch((error) => {
      throw error;
    });

export const addAirline = (newAirline) =>
  axios
    .post('/airlines', newAirline)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export const editAirline = (id, newAirline) =>
  axios
    .post(`/airlines/${id}`, newAirline)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export const deleteAirline = (id) =>
  axios
    .delete(`/airlines/${id}`)
    .then((response) => response.data._id)
    .catch((error) => {
      throw error;
    });
