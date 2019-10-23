import * as actionTypes from '../actionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
  isAuth: false,
  loading: false,
  username: '',
  error: '',
  isAuthenticating: true,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return state.set('loading', true);

    case actionTypes.LOGIN_SUCCESS:
      const auth_user = {
        loading: false,
        username: action.payload,
        isAuth: true,
        isAuthenticating: false,
      };
      return state.merge(auth_user);

    case actionTypes.LOGIN_ERROR:
      const auth_fail = {
        error: action.error,
        loading: false,
      };
      return state.merge(auth_fail);

    case actionTypes.LOGOUT_SUCCESS:
      const logout = {
        username: '',
        isAuth: false,
      };
      return state.merge(logout);

    case actionTypes.GET_CURRENT_USER_SUCCESS:
      const currentUser = {
        loading: false,
        username: action.payload,
        isAuthenticating: false,
        isAuth: true,
      };
      return state.merge(currentUser);
    case actionTypes.GET_CURRENT_USER_FAIL:
      const failedUser = {
        loading: false,
        isAuth: false,
        isAuthenticating: false,
      };
      return state.merge(failedUser);
    default:
      return state;
  }
};

export default reducer;
