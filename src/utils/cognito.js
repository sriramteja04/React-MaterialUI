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
        // To
        // Edge case, AWS Cognito does not allow for the Logins attr to be dynamically generated. So we must create the loginsObj beforehand
        // const loginsObj = {
        // For the object's key name, use the USERPOOL_ID taken from our shared aws_profile js file
        // For the object's value, use the jwtToken received in the success callback
        // [USERPOOL_ID]: result.getIdToken().getJwtToken()
        // };
        // in order to use other AWS services (such as S3), we need the correct AWS credentials
        // we set these credentials by passing in a `CognitoIdentityCredentials` object that has our identity pool id and logins object
        // we are logging into an AWS federated identify pool
        // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        //     IdentityPoolId : IDENTITY_POOL_ID, // your identity pool id here
        //     Logins : loginsObj
        // });
        // then we refresh our credentials to use the latest one that we set
        // AWS.config.credentials.refresh(function(){
        //     console.log(AWS.config.credentials)
        // });
        // resolve the promise to move on to next step after authentication
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
  getCognitoUser()
    .getCurrentUser()
    .signOut();
};

const getCognitoUser = () => {
  return new CognitoUserPool(poolData);
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
            onFailure: function(result) {
              reject(result);
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
