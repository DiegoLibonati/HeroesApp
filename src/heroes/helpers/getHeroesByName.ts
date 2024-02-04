import { Hero } from "../../entities/entities";

export const getHeroesByName = (name: string = "", arr: Hero[]): Hero[] => {
  name = name.toLowerCase().trim();

  if (name.length === 0) return [];

  return arr.filter((hero) => hero.name.toLowerCase().includes(name));
};
