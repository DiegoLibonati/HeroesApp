export const getHeroById = (heroId, arr) => {
  return arr.find((hero) => hero.id === parseInt(heroId));
};
