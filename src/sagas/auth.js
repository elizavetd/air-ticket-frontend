import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as actions from '../actions/auth';
import * as api from '../services/authService';

export function* login ({ payload: { email, password} }) {
  try {
    const loggedUser = yield call(api.login, email, password);

    yield put(actions.loginSuccess(loggedUser));
  } catch (error) {
    yield put(actions.loginFailure(error));
  }
}

export default function* root () {
  yield all([
    takeLatest(actions.LOGIN_REQUEST, login)
  ]);
}
