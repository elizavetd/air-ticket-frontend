import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../services/userService';

function* fetchUsers () {
  try {
    const users = yield call(api.getUsers);

    yield put(actions.fetchUsersSuccess(users));
  } catch (error) {
    yield put(actions.userFailure(error));
  }
}

function* watchFetchUsers () {
  yield takeLatest(actions.FETCH_USERS_REQUEST, fetchUsers);
}

export default function* root () {
  yield all([
    fork(watchFetchUsers)
  ]);
}
