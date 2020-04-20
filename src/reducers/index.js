import { combineReducers } from 'redux';
import currentUser from './userReducer';
import creatures from './creaturesReducer';
import app from './appReducer';

export default combineReducers({
  currentUser,
  creatures,
  app
})