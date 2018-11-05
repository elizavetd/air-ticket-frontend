import axios from '../config/network';

export const login = (email, password) =>
  axios
    .post('/auth/login', { email, password })
    .then((response) => {
      const user = response.data;
      localStorage.setItem('user', JSON.stringify(user));

      return user;
    })
    .catch((error) => {
      throw error;
    });

export const signup = (name, email, password) =>
  axios
    .post('/auth/signup', { name, email, password })
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
