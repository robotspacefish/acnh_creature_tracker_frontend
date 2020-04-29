import CreatureAdapter from '../adapters/creatureAdapter';
const moment = require('moment');

export const fetchCurrentCreatures = () => {
  return dispatch => {
    dispatch({ type: "LOADING_CREATURES" });

    CreatureAdapter.fetchCreatures(dispatch, "current", addCurrentCreatures)
  };
}

export const fetchAllCreatures = () => {
  return dispatch => {
    dispatch({ type: "LOADING_CREATURES" });

    CreatureAdapter.fetchCreatures(dispatch, "creatures", addAllCreatures)
  }
}

const addCurrentCreatures = data => ({ type: "ADD_CURRENT_CREATURES", data });

const addAllCreatures = data => ({ type: "ADD_ALL_CREATURES", data });

export const getCurrentlyAvailableCreatures = (creatures, months, hemisphere, now) => {
  const currentCreatures = creatures.filter(creature => (
    creature.availables.every(at => (
      isOutInThisMonth(creature, months, hemisphere, now) &&
      (isOutAtThisTime(at, now))
    ))
  ))

  return { type: "GET_CURRENT_CREATURES", currentCreatures }
};

const isOutInThisMonth = (creature, months, hem, now) => {
  const hemisphere = hem === "north" ? 0 : 1;
  const month = months[now.month()].toLowerCase();
  return creature.hemispheres[hemisphere][month]
}

const isOutAtThisTime = (availableTimes, now) => {
  const startTime = availableTimes.start_time,
    endTime = availableTimes.end_time;

  if (availableTimes.time === "All day") return true;

  let s = moment();
  let e = moment();
  s.hour(startTime)
  e.hour(endTime)

  if (endTime < startTime) e.day(e.day() + 1)

  // if current time is between start and end times or
  // if current time is between start time and end time is the next day
  return (s.hour() <= now.hour() && e.hour() > now.hour()) ||
    (now.hour() < e.hour() && e.hour() < s.hour() && e.day() > now.day()) ||
    (s.hour() <= now.hour() && e.day() > now.day());
}