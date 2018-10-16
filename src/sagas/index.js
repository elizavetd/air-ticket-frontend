import { fork, all } from 'redux-saga/effects';

// import * as airlineSaga from './airlines';
// import airplaneSagas from './airplanes';
import airportSagas from './airports';
import app from './app';
// import * as authSaga from './auth';
// import * as flightSaga from './flights';
// import * as userSaga from './users';

export default function* rootSaga () {
  yield all([
    // fork(airlineSaga),
    // fork(airplaneSagas),
    fork(airportSagas),
    fork(app)
    // fork(authSaga),
    // fork(flightSaga),
    // fork(userSaga)
  ]);
};
