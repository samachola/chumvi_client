import axios from 'axios';
import API_URL from '../components/config/config';

export default {
  categories: {
    get: () => axios.get(`${API_URL}/category`).then(response => response.data),
  },
};
