import jwt from 'jsonwebtoken';
import setAuthorizationTokens from '../utils/setAuthorizationTokens';
import userApi from '../api/userApi';

import { USER_LOGGED_IN } from '../utils/types';

const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user,
});

const LoginRequest = userData => dispatch => userApi.user.login(userData)
  .then((response) => {
    console.log(response);
    localStorage.setItem('token', response.token);
    setAuthorizationTokens(response.token);
    dispatch(userLoggedIn(response));
    console.log(jwt.decode(response.token));
  });

export default LoginRequest;

