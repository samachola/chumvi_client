import axios from 'axios';
import API_URL from '../components/config/config';

export default {
  user: {
    login: data => axios.post(`${API_URL}/auth/login`, data).then(response => response.data),
    register: data => axios.post(`${API_URL}/auth/register`, data).then(response => response.data),
  },
};
