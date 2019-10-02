import { Auth } from 'aws-amplify';
import { put } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { loginStart, loginError } from '../actions/actions';

export function* loginSaga(action) {
  yield put(loginStart());
  try {
    const user = yield Auth.signIn(action.username, action.password);
    yield console.log(user);
    yield localStorage.setItem('session', user.Session);
    yield put({
      type: actionTypes.LOGIN_SUCCESS,
      payload: user.username
    });
  } catch (error) {
    console.log(error);
    if (error.code === 'NotAuthorizedException') {
      yield put(loginError(error.message));
    }
  }
}
