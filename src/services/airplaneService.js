import axios from '../config/network';

export const getAirplanes = () =>
  axios
    .get('/airplanes')
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
