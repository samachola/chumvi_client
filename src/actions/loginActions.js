import axios from 'axios';
import API_URL from '../components/config/config';

const LoginRequest = (userData) => {
  return dispatch => {
    return axios.post(API_URL+'/auth/login', userData);
  }
}

export default LoginRequest;
