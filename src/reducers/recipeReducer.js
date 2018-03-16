import { RECIPES } from '../utils/types';

export default function recipes(state = {}, action = {}) {
  switch (action.type) {
    case RECIPES:
      return action.recipes;
    default:
      return state;
  }
}
