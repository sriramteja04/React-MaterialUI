import { put } from 'redux-saga/effects';

import { newPassword } from '../../../utils/cognito';
import { loadingStart, loadingEnd } from '../Login/actions';
import { errorNewPassword } from '../New Password/actions';
import * as actionTypes from '../actionTypes';

export function* completeNewPassword(action) {
  try {
    yield loadingStart();
    yield newPassword(
      action.username,
      action.existingPassword,
      action.newPassword
    );
    yield put({
      type: actionTypes.COMPLETE_NEW_PASSWORD_SUCCESS,
      payload: action.username,
    });
    yield loadingEnd();
  } catch (err) {
    yield put(errorNewPassword(err));
  }
}
