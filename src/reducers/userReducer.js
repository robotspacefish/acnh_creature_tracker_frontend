export default (state = { username: '', hemisphere: '', creatures: [] }, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.user;
    case "CLEAR_CURRENT_USER":
      return { username: "" }
    case "ADD_CREATURE":
      return {
        ...state,
        creatures: [...state.creatures, action.user.creatures]
      }
    default:
      return state;
  }
};