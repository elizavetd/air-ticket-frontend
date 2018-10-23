import { call, put, takeLatest, takeEvery, all } from 'redux-saga/effects';
import * as actions from '../actions/airports';
import * as api from '../services/airportService';

export function* fetchAirports () {
  try {
    const airports = yield call(api.getAirports);

    yield put(actions.fetchAirportsSuccess(airports));
  } catch (error) {
    yield put(actions.airportRequestFailure(error));
  }
}

export function* addAirport ({ payload: { airport } }) {
  try {
    const addedAirport = yield call(api.addAirport, airport);

    yield put(actions.addAirportSuccess(addedAirport));
  } catch (error) {
    yield put(actions.airportRequestFailure(error));
  }
}

export function* editAirport ({ payload: { id, newAirport } }) {
  try {
    const editedAirport = yield call(api.editAirport, id, newAirport);

    yield put(actions.updateAirportSuccess(editedAirport));
  } catch (error) {
    yield put(actions.airportRequestFailure(error));
  }
}

export function* deleteAirport ({ payload: { id } }) {
  try {
    const deletedAirportId = yield call(api.deleteAirport, id);

    yield put(actions.deleteAirportSuccess(deletedAirportId));
  } catch (error) {
    yield put(actions.airportRequestFailure(error));
  }
}

export default function* root () {
  yield all([
    takeLatest(actions.FETCH_AIRPORTS_REQUEST, fetchAirports),
    takeEvery(actions.ADD_AIRPORT_REQUEST, addAirport),
    takeEvery(actions.UPDATE_AIRPORT_REQUEST, editAirport),
    takeEvery(actions.DELETE_AIRPORT_REQUEST, deleteAirport)
  ]);
}
