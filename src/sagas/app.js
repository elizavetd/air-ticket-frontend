import { takeEvery, all } from 'redux-saga/effects';
import { INITIALIZATION } from '../actions/app';
import { fetchAirports } from './airports';


export default function* root () {
  yield all([
    takeEvery(INITIALIZATION, fetchAirports)
  ]);
}

