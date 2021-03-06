import * as actionTypes from '../actionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
    isAuth: false,
    loading: false,
    username: '',
    error: '',
    getUserError: '',
    resendError: '',
    newPasswordError: '',
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADING_START:
            return state.set('loading', true);

        case actionTypes.LOADING_END:
            return state.set('loading', false);

        case actionTypes.LOGIN_SUCCESS:
            const auth_user = {
                loading: false,
                username: action.payload,
                isAuth: true,
            };
            return state.merge(auth_user);

        case actionTypes.COMPLETE_NEW_PASSWORD_SUCCESS:
            const newPassword = {
                isAuth: true,
                username: action.payload,
            };
            return state.merge(newPassword);

        case actionTypes.LOGIN_ERROR:
            const auth_fail = {
                error: action.error,
                loading: false,
            };
            return state.merge(auth_fail);

        case actionTypes.DISABLE_ERROR:
            return state.merge({ error: '' });

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
                isAuth: true,
            };
            return state.merge(currentUser);

        case actionTypes.GET_CURRENT_USER_FAIL:
            const failedUser = {
                loading: false,
                isAuth: false,
            };
            return state.merge(failedUser);

        case actionTypes.NEW_PASSWORD_ERROR:
            const error = {
                newPasswordError: action.payload,
                loading: false,
                isAuth: false,
            };
            return state.merge(error);

        case actionTypes.IS_AUTHENTICATE:
            const search = {
                isAuth: true,
                loading: false,
                username: action.payload,
            };
            return state.merge(search);

        case actionTypes.IS_AUTHENTICATE_ERROR:
            const is_Auth_Error = {
                loading: false,
                getUserError: action.payload,
                isAuth: false,
            };
            return state.merge(is_Auth_Error);

        default:
            return state;
    }
};

export default reducer;
