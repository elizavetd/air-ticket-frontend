import axios from '../config/network';

export const getAirports = () =>
  axios
    .get('/airports')
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
