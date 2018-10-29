import { takeEvery, all, call, put } from 'redux-saga/effects';
import * as actions from '../actions/app';
import { fetchAirports } from './airports';
import { fetchAirlines } from './airlines';
import { fetchAirplanes } from './airplanes';
import * as api from '../services/appService';

export function* getCountries () {
  try {
    const countries = yield call(api.getCountries);

    yield put(actions.getCountriesSuccess(countries));
  } catch (error) {
    yield put(actions.getCountriesFailure(error));
  }
}

export default function* root () {
  yield all([
    takeEvery(actions.INITIALIZATION, fetchAirlines),
    takeEvery(actions.INITIALIZATION, fetchAirplanes),
    takeEvery(actions.INITIALIZATION, fetchAirports),
    takeEvery(actions.INITIALIZATION, getCountries)
  ]);
}

