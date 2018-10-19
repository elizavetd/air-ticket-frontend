import { combineReducers } from 'redux';

import airports from './airports';
import airplanes from './airplanes';
import airlines from './airlines';
import flights from './flights';
import users from './users';
import auth from './auth';
import app from './app';

export default combineReducers({
  airports,
  airplanes,
  airlines,
  flights,
  users,
  auth,
  app
});
