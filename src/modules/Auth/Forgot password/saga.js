import { put } from 'redux-saga/effects';

import { resendCode } from '../../../utils/cognito';
import { loadingStart, loadingEnd } from '../Login/actions';
import history from '../../../history';
import * as actionTypes from '../actionTypes';

export function* resend(action) {
  try {
    yield put(loadingStart());
    yield resendCode(action.username);
    yield put(loadingEnd());
    history.push(`/forgetPassword/${action.username}`);
    yield put({
      type: actionTypes.RESEND_CODE_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: actionTypes.RESEND_CODE_ERROR,
      payload: err,
    });
  }
}
