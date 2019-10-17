import { takeEvery } from 'redux-saga/effects';
import { loginSaga, logout, getCurrentUser } from './auth';
import * as actionTypes from '../actions/actionTypes';

export function* authSaga() {
  yield takeEvery(actionTypes.LOGIN_AUTH_SAGA, loginSaga);
  yield takeEvery(actionTypes.LOGOUT_START, logout);
  yield takeEvery(actionTypes.GET_CURRENT_USER, getCurrentUser);
}
