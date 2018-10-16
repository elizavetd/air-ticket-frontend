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
    .catch((error) => console.log(error));
