import { takeEvery } from 'redux-saga/effects';
import { loginSaga } from './auth';
import * as actionTypes from '../actions/actionTypes';

export function* authSaga() {
  yield takeEvery(actionTypes.LOGIN_AUTH_SAGA, loginSaga);
}
