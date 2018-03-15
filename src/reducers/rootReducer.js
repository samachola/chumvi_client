import { combineReducers } from 'redux';
import userReducer from './userReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
  userReducer,
  categoryReducer,
});
