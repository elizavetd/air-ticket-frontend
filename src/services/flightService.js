import axios from '../config/network';

export const getFlights = () =>
  axios
    .get('/flights')
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
