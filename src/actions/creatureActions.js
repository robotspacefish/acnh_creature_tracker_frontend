import CreatureAdapter from '../adapters/creatureAdapter';

export const fetchCurrentCreatures = () => {
  return dispatch => {
    dispatch({ type: "LOADING_CREATURES" });

    CreatureAdapter.fetchCreatures(dispatch, "current", addCurrentCreatures)
  };
}

export const fetchAllCreatures = () => {
  return dispatch => {
    dispatch({ type: "LOADING_CREATURES" });

    CreatureAdapter.fetchCreatures(dispatch, "creatures", addAllCreatures)
  }
}

const addCurrentCreatures = data => ({ type: "ADD_CURRENT_CREATURES", data });

const addAllCreatures = data => ({ type: "ADD_ALL_CREATURES", data });
