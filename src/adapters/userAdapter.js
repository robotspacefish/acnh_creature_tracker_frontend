import { setCurrentUser } from '../actions/userActions';

import { BASE_URL } from '../helpers/utils';

export default class UserAdapter {
  static fetchCurrentUser(dispatch) {
    // retrieve a current user, if one is already logged in
    fetch(`${BASE_URL}/get_current_user`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(user => {
        !user.error && dispatch(setCurrentUser(user))
      })
      .catch(error => console.error)
  }

  static login(dispatch, credentials, push) {
    fetch(`${BASE_URL}/login`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(res => res.json())
      .then(user => {
        user.error ?
          alert(user.error) :
          dispatch(setCurrentUser(user))

        // redirect to user's creature page
        push(`/${user.username}/creatures`);
      })
      .catch(error => console.error)
  }

  static logout(dispatch) {
    fetch(`${BASE_URL}/logout`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then()
      .catch(error => console.error)
  }

  static signup(dispatch, credentials, push) {
    fetch(`${BASE_URL}/signup`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(res => res.json())
      .then(user => {
        user.error ?
          alert(user.error) :
          dispatch(setCurrentUser(user))

        // redirect to user's creature page
        push(`/${user.username}/creatures`);
      })
      .catch(error => console.error)
  }

}