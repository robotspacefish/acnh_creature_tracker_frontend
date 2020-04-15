import { BASE_URL } from '../helpers/utils';

export default class CreatureAdapter {
  static fetchCurrentCreatures(dispatch) {
    fetch(`${BASE_URL}/current`)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "ADD_CREATURES", data })
      })
      .catch(error => console.error)
  }
}