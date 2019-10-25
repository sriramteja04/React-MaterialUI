import * as actionTypes from '../actionTypes';

export const completeNewPassword = (
  username,
  existingPassword,
  newPassword
) => ({
  type: actionTypes.COMPLETE_NEW_PASSWORD,
  username,
  existingPassword,
  newPassword,
});

export const errorNewPassword = err => ({
  type: actionTypes.NEW_PASSWORD_ERROR,
  payload: err,
});
