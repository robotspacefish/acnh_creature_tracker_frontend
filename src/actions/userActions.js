import UserAdapter from '../adapters/userAdapter';
import { setPage } from '../actions/appActions';

export const getCurrentUser = () => {
  return dispatch => {
    dispatch({ type: "GET_CURRENT_USER" });
    UserAdapter.fetchCurrentUser(dispatch);
  }
}

export const setCurrentUser = user => ({ type: "SET_CURRENT_USER", user });

export const login = (credentials, push) => {
  return dispatch => {
    UserAdapter.loginSignup('login', dispatch, credentials, push);

  }
}

export const logout = () => {
  return dispatch => {
    dispatch({ type: "CLEAR_CURRENT_USER" });

    UserAdapter.logout(dispatch);

    dispatch(setPage('home'));
  }
}

export const signup = (credentials, push) => {
  return dispatch => {
    UserAdapter.loginSignup('signup', dispatch, credentials, push);
  }
}

export const addCreature = creature => {
  return dispatch => {
    UserAdapter.addCreature(dispatch, creature)
  }
}

export const removeCreature = creature => {
  return dispatch => {
    UserAdapter.removeCreature(dispatch, creature)
  }
}