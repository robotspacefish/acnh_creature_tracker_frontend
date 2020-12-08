const moment = require('moment');

export const isOutInThisMonth = (creature, months, hem, now) => {
  const hemisphere = hem === "north" ? 0 : 1;

  const currentMonthIndex = now.month() - 1;

  // failsafe for January until I have a second to look into moment some more
  if (currentMonthIndex == -1) currentMonthIndex = 0;

  const month = months[currentMonthIndex].toLowerCase();

  return creature.hemispheres[hemisphere][month]
}

export const isOutAtThisTime = (availableTimes, now) => {
  const startTime = availableTimes.start_time,
    endTime = availableTimes.end_time;

  if (availableTimes.time === "All day") return true;

  let s = moment();
  let e = moment();
  s.hour(startTime)
  e.hour(endTime)

  if (endTime < startTime) e.day(e.day() + 1)

  /**
   * if current time is between start and end times or
   * if current time is between start time and end time is the next day
   */
  return (s.hour() <= now.hour() && e.hour() > now.hour()) ||
    (now.hour() < e.hour() && e.hour() < s.hour() && e.day() > now.day()) ||
    (s.hour() <= now.hour() && e.day() > now.day());
}