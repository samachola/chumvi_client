import { CATEGORIES_LOADED } from '../utils/types';

export default function categories(state = {}, action = {}) {
  switch (action.type) {
    case CATEGORIES_LOADED:
      return action.categories;
    default:
      return state;
  }
}
