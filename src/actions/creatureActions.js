const BASE_URL = "http://127.0.0.1:3001";
export const fetchCurrentCreatures = () => {
  return dispatch => {
    dispatch({ type: "LOADING_CREATURES" });

    fetch(`${BASE_URL}/current`)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "ADD_CREATURES", data })
      })
      .catch(error => console.error)
  };
}
