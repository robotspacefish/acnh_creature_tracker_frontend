import { combineReducers } from 'redux';
import currentUser from './userReducer';
import creatures from './creaturesReducer';
import clock from './clockReducer';
import app from './appReducer';

export default combineReducers({
  currentUser,
  creatures,
  clock,
  app
})