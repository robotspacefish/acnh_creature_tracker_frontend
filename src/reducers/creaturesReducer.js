const defaultState = {
  all: [],
  current: [],
  loading: false,
  hemisphere: "north"
};

export default function creatures(state = defaultState, action) {
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
    case "GET_CURRENT_CREATURES":
      return {
        ...state,
        current: action.currentCreatures
      };
    default:
      return state;
  }
}