import axios from '../config/network';

export const getUsers = () =>
  axios
    .get('/users')
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
