import { combineReducers } from 'redux';
import currentUser from './userReducer';
import creatures from './creaturesReducer';

export default combineReducers({
  currentUser,
  creatures
})