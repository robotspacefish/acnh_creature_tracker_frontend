const BASE_URL = "http://127.0.0.1:3001/api";

const sortAlpha = (array, sortType) => {
  const arrayCopy = [...array];
  return arrayCopy.sort(function (a, b) {
    const typeA = a[sortType].toUpperCase();
    const typeB = b[sortType].toUpperCase();
    if (typeA < typeB) {
      return -1;
    }
    if (typeA > typeB) {
      return 1;
    }

    // must be equal
    return 0;
  })
}

export { BASE_URL, sortAlpha };