import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import * as actions from '../actions/airplanes';
import * as api from '../services/airplaneService';

function* fetchAirplanes () {
  try {
    const airplanes = yield call(api.getAirplanes);

    yield put(actions.fetchAirplanesSuccess(airplanes));
  } catch (error) {
    yield put(actions.airplaneFailure(error));
  }
}

// function* watchFetchAirplanes () {
//   yield takeLatest(actions.FETCH_AIRPORTS_REQUEST, fetchAirplanes);
// }

export default function* root () {
  yield all([
    takeLatest(actions.FETCH_AIRPORTS_REQUEST, fetchAirplanes)
  ]);
}
