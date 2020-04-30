const moment = require('moment');
const now = moment();

export default function clock(state = { now }, action) {
  switch (action.type) {
    case "SET_CURRENT_TIME":
      return {
        ...state,
        now: action.payload
      }
    default:
      return state;
  }
}