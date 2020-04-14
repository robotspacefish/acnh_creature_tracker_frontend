export default (state = {
  data: [],
  loading: false
}, action) => {
  switch (action.type) {
    case "LOADING_CREATURES":
      return {
        ...state,
        loading: true
      }
    case "ADD_CREATURES":
      return {
        data: action.data,
        loading: false
      }
    default:
      return state;
  }
}