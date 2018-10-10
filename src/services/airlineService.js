import axios from '../config/network';

export const getAirlines = () =>
  axios
    .get('/airlines')
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
