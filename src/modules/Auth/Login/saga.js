import { Auth } from 'aws-amplify';
import { put } from 'redux-saga/effects';

import * as actionTypes from '../actionTypes';
import { loginStart, loginError } from './actions';
import { authenticate, logout as userLogout } from '../../../utils/cognito';

import { Redirect } from 'react-router-dom';

export function* loginSaga(action) {
  yield put(loginStart());
  try {
    const res = yield authenticate(action.username, action.password);
    if (res === 'new password required') {
      //Redirect to new password page
      action.history.push('/newPassword');
    }
    yield put({
      type: actionTypes.LOGIN_SUCCESS,
      payload: action.username,
    });
    // console.log(AWS.config);
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
    yield userLogout();
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
