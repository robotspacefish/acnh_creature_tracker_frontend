import { setCurrentUser } from '../actions/userActions';

import { BASE_URL, getErrorMsgs } from '../helpers/helpers';

export default class UserAdapter {
  static fetchCurrentUser(dispatch) {
    /** retrieve a current user, if one is already logged in  */
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

  static loginSignup(type, dispatch, credentials, push) {
    fetch(`${BASE_URL}/${type}`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(res => res.json())
      .then(user => {
        if (user.error) {
          alert(getErrorMsgs(user.error))
        } else {
          dispatch(setCurrentUser(user))

          // redirect to user's creature page
          push(`/${user.username}/creatures`);
        }

      })
      .catch(error => console.error)
  }

  static logout() {
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

  static addCreature(dispatch, creature) {
    fetch(`${BASE_URL}/creatures_user`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ creature })
    })
      .then(res => res.json())
      .then(user => {
        user.error ?
          alert(user.error) :
          dispatch({ type: "ADD_CREATURE", user })
      })
      .catch(error => console.error)
  }

  static removeCreature(dispatch, creature) {
    fetch(`${BASE_URL}/creatures_user`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ creature })
    })
      .then(res => res.json())
      .then(user => {
        user.error ?
          alert(user.error) :
          dispatch({ type: "REMOVE_CREATURE", creatureId: creature.id })
      })
      .catch(error => console.error)
  }

}