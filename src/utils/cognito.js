import {
  AuthenticationDetails,
  CognitoUserPool,
  CognitoUser,
} from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk/global';

import { userData as poolData, userPool } from './login';

export const authenticate = (username, password) => {
  return new Promise((resolve, reject) => {
    const authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });
    // create a `CognitoUser` object filled with a username and identity pool
    const userData = {
      Username: username,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      newPasswordRequired: function(userAttributes, requiredAttributes) {
        resolve('new password required');
      },
      onSuccess: function(result) {
        resolve(result);
      },
      onFailure: function(err) {
        reject(err);
      },
    });
  });
};

export const logout = () => {
  if (AWS && AWS.config && AWS.config.credentials) {
    AWS.config.credentials['user-role'] = [];
  }
  getCognitoUser()
    .getCurrentUser()
    .signOut();
};

const getCognitoUser = () => {
  return new CognitoUserPool(poolData);
};
