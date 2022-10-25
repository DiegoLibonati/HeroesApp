import { types } from "../types/types";

export const heroesReducer = (state = {}, action) => {
  switch (action.type) {
    case types.fetch:
      return {
        ...state,
        heroes: action.payload,
        loading: false,
      };

    case types.actualPublisher:
      return {
        ...state,
        actualPublisher: action.payload,
      };

    case types.name:
      return {
        ...state,
        nameSearch: action.payload,
      };

    case types.heroId:
      return {
        ...state,
        heroId: action.payload,
      };

    default:
      return state;
  }
};
