import { combineReducers } from 'redux';
import userReducer from './userReducer';
import categoryReducer from './categoryReducer';
import recipeReducer from './recipeReducer';

export default combineReducers({
  userReducer,
  categoryReducer,
  recipeReducer,
});
