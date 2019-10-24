import * as actionTypes from '../actionTypes';

export const loginStart = () => ({
  type: actionTypes.LOGIN_START,
});

export const login = (username, password, history) => ({
  type: actionTypes.LOGIN_AUTH_SAGA,
  username,
  password,
  history,
});

export const loginError = error => ({
  type: actionTypes.LOGIN_ERROR,
  error,
});

export const logout = () => ({
  type: actionTypes.LOGOUT_START,
});

export const getCurrentUser = () => ({
  type: actionTypes.GET_CURRENT_USER,
});
