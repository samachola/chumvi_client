import axios from 'axios';
import API_URL from '../components/config/config';

export default {
  recipes: {
    get: () => axios.get(`${API_URL}/recipe`).then(response => response.data),
  },
};
