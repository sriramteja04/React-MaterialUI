import * as actionTypes from './actionTypes';

export const loginStart = () => ({
  type: actionTypes.LOGIN_START
});

export const login = (username, password) => ({
  type: actionTypes.LOGIN_AUTH_SAGA,
  username,
  password
});

export const loginError = error => ({
  type: actionTypes.LOGIN_ERROR,
  error
});
