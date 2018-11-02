import axios from '../config/network';

export const login = (email, password) =>
  axios
    .post('/auth', { email, password })
    .then((response) => {
      const user = response.data;
      localStorage.setItem('user', JSON.stringify(user));

      return user;
    })
    .catch((error) => {
      throw error;
    });

export const logout = () =>
  localStorage.removeItem('user');
