import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as actions from '../actions/airports';
import * as api from '../services/airportService';

export function* fetchAirports () {
  try {
    const airports = yield call(api.getAirports);

    yield put(actions.fetchAirportsSuccess(airports));
  } catch (error) {
    yield put(actions.airportFailure(error));
  }
}

export default function* root () {
  yield all([
    takeLatest(actions.FETCH_AIRPORTS_REQUEST, fetchAirports)
  ]);
}

