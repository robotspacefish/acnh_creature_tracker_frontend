export default (state = { currentPage: '' }, action) => {
  switch (action.type) {
    case "SET_PAGE":
      return {
        ...state,
        currentPage: action.page
      }
    default:
      return state;
  }
};