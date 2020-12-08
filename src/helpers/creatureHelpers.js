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
  if (availableTimes.time === "All day") return true;

  const startHour = availableTimes.start_time,
    endHour = availableTimes.end_time,
    nowDay = now.day(),
    nowHour = now.hour(),
    endDay = endHour < startHour ? now.day() + 1 : now.day();

  /**
   * if current time is between start and end times or
   * if current time is between start time and end time is the next day
   */
  return (startHour <= nowHour && endHour > nowHour) ||
    (nowHour < endHour && endHour < startHour && endDay > nowDay) ||
    (startHour <= nowHour && endDay > nowDay);
}
