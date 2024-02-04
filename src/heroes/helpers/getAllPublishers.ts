import React from "react";
import { Hero } from "../../entities/entities";

export const getAllPublishers = (arr: Hero[]): string[] => {
  const publishers: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    const hero = arr[i] as Hero;
    if (
      !publishers.includes(hero.biography.publisher) &&
      arr[i].biography.publisher !== null &&
      arr[i].biography.publisher !== ""
    ) {
      publishers.push(hero.biography.publisher);
    }
  }
  return publishers;
};
