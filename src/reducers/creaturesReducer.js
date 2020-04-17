export default (state = {
  all: [],
  current: {
    north: [],
    south: []
  },
  loading: false
}, action) => {
  switch (action.type) {
    case "LOADING_CREATURES":
      return {
        ...state,
        loading: true
      }
    case "ADD_CURRENT_CREATURES":
      return {
        ...state,
        current: action.data,
        loading: false
      }
    case "ADD_ALL_CREATURES":
      return {
        ...state,
        all: action.data,
        loading: false
      }
    default:
      return state;
  }
}