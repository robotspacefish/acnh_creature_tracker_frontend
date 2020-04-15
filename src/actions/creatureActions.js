import CreatureAdapter from '../adapters/creatureAdapter';

export const fetchCurrentCreatures = () => {
  return dispatch => {
    dispatch({ type: "LOADING_CREATURES" });
    CreatureAdapter.fetchCurrentCreatures(dispatch)
  };
}
