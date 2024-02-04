import { Hero } from "../../entities/entities";

export const getHeroById = (heroId: string, arr: Hero[]): Hero => {
  return arr.find((hero) => hero.id === parseInt(heroId))!;
};
