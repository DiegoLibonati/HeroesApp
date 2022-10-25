export const getHeroesByName = (name = "", arr) => {
  name = name.toLowerCase().trim();

  if (name.length === 0) return [];

  return arr.filter((hero) => hero.name.toLowerCase().includes(name));
};
