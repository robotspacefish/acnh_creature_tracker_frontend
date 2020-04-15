import { setCurrentUser } from '../actions/userActions';

import { BASE_URL } from '../helpers/utils';

export default class UserAdapter {
  static fetchCurrentUser(dispatch) {
    // retrieve a current user, if one is already logged in
    fetch(`${BASE_URL}/get_current_user`)
      .then(res => res.json())
      .then(user => {
        user.error ?
          alert("TODO: Handle no one logged in when app starts") :
          dispatch(setCurrentUser(user))
      })
      .catch(error => console.error)
  }

  static login(dispatch, credentials) {
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
      })
      .catch(error => console.error)
  }
}