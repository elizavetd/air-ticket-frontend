import axios from '../config/network';

export const getAirplanes = () =>
  axios
    .get('/airplanes')
    .then((response) => {
      const airplanes = {};

      for (let i = 0; i < response.data.length; i++) {
        airplanes[response.data[i]._id] = response.data[i];
      }

      return airplanes;
    })
    .catch((error) => {
      throw error;
    });

export const addAirplane = (newAirplane) =>
  axios
    .post('/airplanes', newAirplane)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export const editAirplane = (id, newAirplane) =>
  axios
    .post(`/airplanes/${id}`, newAirplane)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export const deleteAirplane = (id) =>
  axios
    .delete(`/airplanes/${id}`)
    .then((response) => response.data._id)
    .catch((error) => {
      throw error;
    });
