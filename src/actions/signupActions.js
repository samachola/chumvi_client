import userApi from '../api/userApi';
import { USER_REGISTERED_SUCCESSFULLY } from '../utils/types';

const userRegistered = user => ({
  type: USER_REGISTERED_SUCCESSFULLY,
  user,
});
const userSignupRequest = userData => dispatch => userApi.user.register(userData)
  .then((response) => {
    dispatch(userRegistered(response));
  });

export default userSignupRequest;
