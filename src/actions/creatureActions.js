import CreatureAdapter from '../adapters/creatureAdapter';
const BASE_URL = "http://127.0.0.1:3001";

export const fetchCurrentCreatures = () => {
  return dispatch => {
    dispatch({ type: "LOADING_CREATURES" });
    console.log(dispatch)
    CreatureAdapter.fetchCurrentCreatures(dispatch)
  };
}
