import * as actionTypes from '../actionTypes';

export const resendCode = username => ({
  type: actionTypes.RESEND_CODE,
  username,
});
