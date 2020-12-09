export const isOutInThisMonth = (creature, months, hem, now) => {
  const hemisphere = hem === "north" ? 0 : 1;
  const currentMonthIndex = now.month();

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
