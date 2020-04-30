import { BASE_URL } from '../helpers/helpers';
import { isOutAtThisTime, isOutInThisMonth } from '../helpers/creatureHelpers';

export const fetchAllCreatures = () => {
  return dispatch => {
    dispatch({ type: "LOADING_CREATURES" });

    fetch(`${BASE_URL}/creatures`)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "ADD_ALL_CREATURES", data })
      })
      .catch(error => console.error)
  }
}

export const getCurrentlyAvailableCreatures = (creatures, months, hemisphere, now) => {
  const currentCreatures = creatures.filter(creature => (
    creature.availables.every(at => (
      isOutInThisMonth(creature, months, hemisphere, now) &&
      (isOutAtThisTime(at, now))
    ))
  ))

  return { type: "GET_CURRENT_CREATURES", currentCreatures }
};

