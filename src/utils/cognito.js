import {
  AuthenticationDetails,
  CognitoUserPool,
  CognitoUser,
} from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk/global';

import { poolData, userPool } from './login';

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
        resolve();
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
  getCurrentUser().signOut();
};

const getCognitoUser = () => {
  return new CognitoUserPool(poolData);
};

const getCurrentUser = () => {
  return getCognitoUser().getCurrentUser();
};

export const newPassword = (username, existingPassword, newPassword) => {
  return new Promise((resolve, reject) => {
    const authenticationData = {
      Username: username,
      Password: existingPassword,
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username: username,
      Pool: userPool,
    };

    const cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      newPasswordRequired: function(userAttributes, requiredAttributes) {
        // delete userAttributes.email_verified;
        cognitoUser.completeNewPasswordChallenge(
          newPassword,
          requiredAttributes,
          {
            onSuccess: function(result) {
              resolve(result);
            },
            onFailure: function(err) {
              console.log(err);
              reject(err.message);
            },
          }
        );
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

export const isAuthenticate = () => {
  return new Promise((resolve, reject) => {
    const cognitoUser = getCurrentUser();
    if (cognitoUser) {
      cognitoUser.getSession((err, session) => {
        if (err) {
          reject(err);
        }
        resolve(cognitoUser);
      });
    } else {
      reject("can't retrieve the Current User");
    }
  });
};

export const resendCode = username => {
  return new Promise((resolve, reject) => {
    const userData = {
      Username: username,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.forgotPassword({
      onSuccess: function() {
        resolve();
      },
      inputVerificationCode: function() {
        resolve();
      },
      onFailure: function(err) {
        reject(err);
      },
    });
  });
};
