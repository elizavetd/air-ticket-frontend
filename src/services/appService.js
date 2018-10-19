import axios from 'axios';

export const getCountries = () =>
  axios({
    method: 'get',
    url: 'https://restcountries.eu/rest/v2/all?fields=name;timezones'
  })
    .then((response) => response.data)
    .catch((error) => { throw error; });
