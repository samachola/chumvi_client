import axios from 'axios';
import API_URL from '../components/config/config';

const userSignupRequest = (userData) => {
	return dispatch => {
		return axios.post(API_URL+'/auth/register', userData);
	}
}

export default userSignupRequest;
