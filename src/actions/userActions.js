import UserAdapter from '../adapters/userAdapter';

export const getCurrentUser = () => {
  return dispatch => {
    dispatch({ type: "GET_CURRENT_USER" });
    UserAdapter.fetchCurrentUser(dispatch);
  }
}

export const setCurrentUser = user => ({ type: "SET_CURRENT_USER", user });

export const login = (credentials, push) => {
  return dispatch => {
    UserAdapter.login(dispatch, credentials, push);
  }
}

export const logout = () => {
  return dispatch => {
    dispatch({ type: "CLEAR_CURRENT_USER" });

    UserAdapter.logout(dispatch);
  }
}

export const signup = (credentials, push) => {
  return dispatch => {
    UserAdapter.signup(dispatch, credentials, push);
  }
}