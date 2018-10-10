import axios from '../config/network';

export const login = () =>
  axios
    .get('/auth')
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
