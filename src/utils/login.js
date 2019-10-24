// import {CognitoUser, CognitoUserPool} from 'amazon-cognito-identity-js'
// import Constants from '../config/constants'
//
// const getUserPool = () => {
//     const poolData = {
//         UserPoolId: Constants.cognito.USER_POOL_ID,
//         ClientId: Constants.cognito.APP_CLIENT_ID
//     };
//     return new CognitoUserPool(poolData)
// }
//
// export const getCognitoUser = (username) => {
//     const userData = {
//             Username: username,
//             Pool: getUserPool()
//     };
//
//     return new CognitoUser(userData)
// };
//

import { CognitoUserPool } from 'amazon-cognito-identity-js';
import 'amazon-cognito-js';
import * as AWS from 'aws-sdk/global';

// sriramteja aws account cred's

// const REGION = "us-east-2";
// const USER_POOL_ID = 'us-east-2_3oherUQ0f';
// const CLIENT_ID = '316rlon0p7f76dnn5pcoe91fl4';

const REGION = 'us-west-2';
const USER_POOL_ID = 'us-west-2_flCJaoDig';
const CLIENT_ID = '159ufjrihgehb67sn373aotli7';

AWS.config.update({
  region: REGION,
});

export const userData = {
  UserPoolId: USER_POOL_ID,
  ClientId: CLIENT_ID,
};

export const userPool = new CognitoUserPool(userData);

export const USERPOOL_ID =
  'cognito-idp.' + REGION + '.amazonaws.com/' + USER_POOL_ID;
export const IDENTITY_POOL_ID =
  'us-east-1:65bd1e7d-546c-4f8c-b1bc-9e3e571cfaa7';
