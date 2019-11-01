import { put } from 'redux-saga/effects';

import * as actionTypes from '../actionTypes';
import { loadingStart, loginError, loadingEnd } from './actions';
import { authenticate, isAuthenticate, logout as userLogout } from '../../../utils/cognito';
import history from '../../../history';

export function* loginSaga(action) {
    yield put(loadingStart());
    try {
        const res = yield authenticate(action.username, action.password);
        if (res === 'new password required') {
            //Redirect to new password page
            yield put(loadingEnd());
            history.push('/newPassword');
        } else {
            yield put({
                type: actionTypes.LOGIN_SUCCESS,
                payload: action.username,
            });
        }
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
        // console.log('started....');
        yield put(loadingStart());
        const res = yield isAuthenticate();
        yield put(loadingEnd());
        yield put({
            type: actionTypes.IS_AUTHENTICATE,
            payload: res.username,
        });
    } catch (error) {
        yield put({
            type: actionTypes.IS_AUTHENTICATE_ERROR,
            payload: error,
        });
    }
}
