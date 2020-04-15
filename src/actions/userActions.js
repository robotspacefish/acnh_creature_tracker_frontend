import UserAdapter from '../adapters/userAdapter';

export const getCurrentUser = () => {
  return dispatch => {
    dispatch({ type: "GET_CURRENT_USER" });
    UserAdapter.fetchCurrentUser(dispatch);
  }
}

export const setCurrentUser = user => ({ type: "SET_CURRENT_USER", user });

export const login = credentials => {
  return dispatch => {
    dispatch({ type: "LOADING_USER" });
    UserAdapter.login(dispatch, credentials);
  }
}

export const logout = () => {
  return dispatch => {
    dispatch({ type: "CLEAR_CURRENT_USER" });

    UserAdapter.logout(dispatch);
  }
}