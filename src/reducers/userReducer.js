import {
  USER_REGISTERED_SUCCESSFULLY,
  USER_LOGGED_IN,
} from '../utils/types';

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case USER_REGISTERED_SUCCESSFULLY:
      return action.user;
    case USER_LOGGED_IN:
      return action.user;
    default:
      return state;
  }
}
