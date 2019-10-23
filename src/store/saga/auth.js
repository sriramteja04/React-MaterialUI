import { Auth } from 'aws-amplify';
import { put } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { loginStart, loginError } from '../actions/actions';
import * as AWS from 'aws-sdk/global';

export function* loginSaga(action) {
  yield put(loginStart());
  try {
    const user = yield Auth.signIn(action.username, action.password);
    yield console.log(user);
    yield put({
      type: actionTypes.LOGIN_SUCCESS,
      payload: user.username,
    });
    console.log(AWS.config);
  } catch (error) {
    console.log(error);
    if (error.code === 'NotAuthorizedException') {
      yield put(loginError(error.message));
    } else if (error.code === 'UserNotFoundException') {
      yield put(loginError(error.message));
    }
  }
}

export function* logout() {
  try {
    yield Auth.signOut();
    yield put({
      type: actionTypes.LOGOUT_SUCCESS,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* getCurrentUser() {
  try {
    yield Auth.currentSession();
    const currentUser = yield Auth.currentAuthenticatedUser();
    yield put({
      type: actionTypes.GET_CURRENT_USER_SUCCESS,
      payload: currentUser.username,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: actionTypes.GET_CURRENT_USER_FAIL,
    });
  }
}
