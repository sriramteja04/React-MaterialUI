import * as actionTypes from './actions/actionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
  isAuth: false,
  loading: false,
  username: '',
  error: ''
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return state.set('loading', true);
    case actionTypes.LOGIN_SUCCESS:
      const auth_user = {
        loading: false,
        username: action.payload,
        isAuth: true
      };
      return state.merge(auth_user);
    case actionTypes.LOGIN_ERROR:
      return state.set('error', action.payload);
    default:
      return state;
  }
};

export default reducer;
