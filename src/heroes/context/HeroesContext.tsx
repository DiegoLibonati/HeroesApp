import { createContext } from "react";
import { HeroesContextT } from "../../entities/entities";

export const HeroesContext = createContext<HeroesContextT | null>(null);
