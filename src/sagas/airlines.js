import { call, put, takeLatest, takeEvery, all } from 'redux-saga/effects';
import * as actions from '../actions/airlines';
import * as api from '../services/airlineService';

export function* fetchAirlines () {
  try {
    const airlines = yield call(api.getAirlines);

    yield put(actions.fetchAirlinesSuccess(airlines));
  } catch (error) {
    yield put(actions.airlineRequestFailure(error));
  }
}

export function* addAirline ({ payload: { airline } }) {
  try {
    const addedAirline = yield call(api.addAirline, airline);

    yield put(actions.addAirlineSuccess(addedAirline));
  } catch (error) {
    yield put(actions.airlineRequestFailure(error));
  }
}

export function* editAirline ({ payload: { id, newAirline } }) {
  try {
    const editedAirline = yield call(api.editAirline, id, newAirline);

    yield put(actions.updateAirlineSuccess(editedAirline));
  } catch (error) {
    yield put(actions.airlineRequestFailure(error));
  }
}

export function* deleteAirline ({ payload: { id } }) {
  try {
    const deletedAirlineId = yield call(api.deleteAirline, id);

    yield put(actions.deleteAirlineSuccess(deletedAirlineId));
  } catch (error) {
    yield put(actions.airlineRequestFailure(error));
  }
}

export default function* root () {
  yield all([
    takeLatest(actions.FETCH_AIRLINES_REQUEST, fetchAirlines),
    takeEvery(actions.ADD_AIRLINE_REQUEST, addAirline),
    takeEvery(actions.UPDATE_AIRLINE_REQUEST, editAirline),
    takeEvery(actions.DELETE_AIRLINE_REQUEST, deleteAirline)
  ]);
}
