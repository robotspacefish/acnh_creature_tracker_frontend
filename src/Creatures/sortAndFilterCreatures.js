import { sortAlpha, sortNumeric } from '../helpers/helpers';

export const filterByDisplayTypeAndSort = (sort, displayType, creatures) => {
  const filteredCreatures = filterByDisplayType(displayType, creatures);
  return sort.type === 'default' ?
    filteredCreatures : sortCreatures(sort, filteredCreatures);
}

const filterByDisplayType = (displayType, creatures) => {
  return displayType === 'all' ?
    creatures :
    creatures.filter(creature => creature.c_type === displayType);
}

const sortCreatures = (sort, creatures) => {
  let sortedCreatures;
  switch (sort.type) {
    case 'type': /** c_type */
      sortedCreatures = sortAlpha(creatures, 'c_type')
      break;
    case 'name':
    case 'location':
      sortedCreatures = sortAlpha(creatures, sort.type)
      break;
    case "shadow":
      sortedCreatures = sortByShadowSize(creatures);
      break;
    case "time":
      sortedCreatures = sortByAvailableTime(creatures);
      break;
    case "price":
      sortedCreatures = sortNumeric(creatures, sort.type)
      break;
    default:
      sortedCreatures = creatures;
  }

  /** dsc sort */
  if (sort.direction === 'dsc') sortedCreatures = sortedCreatures.reverse()

  return sortedCreatures;

};

const sortByShadowSize = (creatures) => {
  /**
   * some creatures don't have a shadow, some have a 'narrow' shadow
   * I separated them from number size shadows, converted those to integers,
   * sorted, and joined and flatted those 2 arrays in 'asc' order
   */
  const type = 'shadow_size'
  const narrowOrNACreatures = creatures.filter(c => c.shadow_size === "Narrow" || c.shadow_size === "NA");
  const nonNarrowCreatures = creatures.filter(c => c.shadow_size !== "Narrow" && c.shadow_size !== "NA").map(c => (
    { ...c, shadow_size: parseInt(c.shadow_size) }
  ));
  const sortedNarrowOrNaCreatures = sortAlpha(narrowOrNACreatures, type);
  const sortedNonNarrowCreatures = sortNumeric(nonNarrowCreatures, type);

  return [...sortedNarrowOrNaCreatures, sortedNonNarrowCreatures].flat();
}

const sortByAvailableTime = creatures => (
  [...creatures].sort((a, b) => {
    const creatureA = getCreaturesFirstTimeAvailable(a);
    const creatureB = getCreaturesFirstTimeAvailable(b);

    return creatureA.start_time - creatureB.start_time
  })
);

const getCreaturesFirstTimeAvailable = creature => (
  /**
   * if creature has 1 available time, return that
   * otherwise sort the times and return the first one
   *  */
  creature.availables.length === 1 ?
    { ...creature.availables[0] } : [...creature.availables].sort((availA, availB) => availA.start_time - availB.start_time)[0]
);