export const isOutInThisMonth = (creature, months, hem, now) => {
  const hemisphere = hem === "north" ? 0 : 1;

  const currentMonthIndex = now.month() - 1;
  // debugger
  // failsafe for January until I have a second to look into moment some more
  if (currentMonthIndex === -1) currentMonthIndex = 0;

  const month = months[currentMonthIndex].toLowerCase();

  return creature.hemispheres[hemisphere][month]
}

export const isOutAtThisTime = (availableTimes, now) => {
  const startTime = availableTimes.start_time,
    endTime = availableTimes.end_time;

  if (availableTimes.time === "All day") return true;

  const endDay = endTime < startTime ? now.day() + 1 : now.day();
  const nowDay = now.day(), nowHour = now.hour();

  /**
   * if current time is between start and end times or
   * if current time is between start time and end time is the next day
   */
  return (startTime <= nowHour && endTime > nowHour) ||
    (nowHour < endTime && endTime < startTime && endDay > nowDay) ||
    (startTime <= nowHour && endDay > nowDay);
}