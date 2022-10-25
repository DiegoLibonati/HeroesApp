export const getHeroesByPublishers = (publisher, arr) => {
  if (publisher === "ALL" || publisher === "") {
    return arr;
  } else {
    const finalArray = arr.filter(
      (hero) => hero.biography.publisher === publisher
    );

    if (finalArray) {
      return finalArray;
    } else {
      throw new Error(`${publisher} is not a valid publisher`);
    }
  }
};
