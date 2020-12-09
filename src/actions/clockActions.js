const dayjs = require('dayjs');

export const setCurrentTime = () => {
  return { type: "SET_CURRENT_TIME", payload: dayjs() }
}