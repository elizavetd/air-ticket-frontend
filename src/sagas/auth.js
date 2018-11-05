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

export function* signup ({ payload: { name, email, password} }) {
  try {
    const signedUser = yield call(api.signup, name, email, password);

    yield put(actions.signupSuccess(signedUser));
  } catch (error) {
    yield put(actions.signupFailure(error));
  }
}

export default function* root () {
  yield all([
    takeLatest(actions.LOGIN_REQUEST, login),
    takeLatest(actions.SIGNUP_REQUEST, signup)
  ]);
}
