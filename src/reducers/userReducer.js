export default (state = {
  data: [],
  loading: false
}, action) => {
  switch (action.type) {
    case "LOADING_USER":
      return {
        ...state,
        loading: true
      }
    case "LOGIN":
      return {
        data: action.data,
        loading: false
      }
    default:
      return state;
  }
};