import { takeEvery } from 'redux-saga/effects';

export function* authSaga() {
  yield takeEvery('LOGIN_STARTED', loginSaga);
}

export function* loginSaga(action) {
  yield console.log('Hello World');
}
