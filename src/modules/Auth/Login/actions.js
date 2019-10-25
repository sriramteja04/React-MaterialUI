import * as actionTypes from '../actionTypes';

export const loadingStart = () => ({
  type: actionTypes.LOADING_START,
});

export const login = (username, password) => ({
  type: actionTypes.LOGIN_AUTH_SAGA,
  username,
  password,
});

export const loadingEnd = () => ({
  type: actionTypes.LOADING_END,
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
