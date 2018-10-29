import { call, put, takeLatest, takeEvery, all } from 'redux-saga/effects';
import * as actions from '../actions/airplanes';
import * as api from '../services/airplaneService';

export function* fetchAirplanes () {
  try {
    const airplanes = yield call(api.getAirplanes);

    yield put(actions.fetchAirplanesSuccess(airplanes));
  } catch (error) {
    yield put(actions.airplaneRequestFailure(error));
  }
}

export function* addAirplane ({ payload: { airplane } }) {
  try {
    const addedAirplane = yield call(api.addAirplane, airplane);

    yield put(actions.addAirplaneSuccess(addedAirplane));
  } catch (error) {
    yield put(actions.airplaneRequestFailure(error));
  }
}

export function* editAirplane ({ payload: { id, newAirplane } }) {
  try {
    const editedAirplane = yield call(api.editAirplane, id, newAirplane);

    yield put(actions.updateAirplaneSuccess(editedAirplane));
  } catch (error) {
    yield put(actions.airplaneRequestFailure(error));
  }
}

export function* deleteAirplane ({ payload: { id } }) {
  try {
    const deletedAirplaneId = yield call(api.deleteAirplane, id);

    yield put(actions.deleteAirplaneSuccess(deletedAirplaneId));
  } catch (error) {
    yield put(actions.airplaneRequestFailure(error));
  }
}

export default function* root () {
  yield all([
    takeLatest(actions.FETCH_AIRPLANES_REQUEST, fetchAirplanes),
    takeEvery(actions.ADD_AIRPLANE_REQUEST, addAirplane),
    takeEvery(actions.UPDATE_AIRPLANE_REQUEST, editAirplane),
    takeEvery(actions.DELETE_AIRPLANE_REQUEST, deleteAirplane)
  ]);
}
