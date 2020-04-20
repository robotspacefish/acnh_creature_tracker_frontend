import { BASE_URL } from '../helpers/utils';

export default class CreatureAdapter {
  static fetchCreatures(dispatch, type, action) {
    // type === 'current' or 'creatures (all creatures)
    // action === add current or add all creatures

    fetch(`${BASE_URL}/${type}`)
      .then(res => res.json())
      .then(data => {
        dispatch(action(data))
      })
      .catch(error => console.error)
  }
}