import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import * as actions from '../actions/airlines';
import * as api from '../services/airlineService';

function* fetchAirlines () {
  try {
    const airlines = yield call(api.getAirlines);

    yield put(actions.fetchAirlinesSuccess(airlines));
  } catch (error) {
    yield put(actions.airlineFailure(error));
  }
}

function* watchFetchAirlines () {
  yield takeLatest(actions.FETCH_AIRLINES_REQUEST, fetchAirlines);
}

export default function* root () {
  yield all([
    fork(watchFetchAirlines)
  ]);
}
