import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import * as actions from '../actions/flights';
import * as api from '../services/flightService';

function* fetchFlights () {
  try {
    const flights = yield call(api.getFlights);

    yield put(actions.fetchFlightsSuccess(flights));
  } catch (error) {
    yield put(actions.flightFailure(error));
  }
}

function* watchFetchFlights () {
  yield takeLatest(actions.FETCH_FLIGHTS_REQUEST, fetchFlights);
}

export default function* root () {
  yield all([
    fork(watchFetchFlights)
  ]);
}
