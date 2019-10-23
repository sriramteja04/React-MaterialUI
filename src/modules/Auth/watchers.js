import { takeEvery } from 'redux-saga/effects';
import { loginSaga, logout, getCurrentUser } from './Login/saga';
import * as actionTypes from './actionTypes';

export function* authSaga() {
  yield takeEvery(actionTypes.LOGIN_AUTH_SAGA, loginSaga);
  yield takeEvery(actionTypes.LOGOUT_START, logout);
  yield takeEvery(actionTypes.GET_CURRENT_USER, getCurrentUser);
}