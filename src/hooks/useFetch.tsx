import React from "react";
import { useEffect, useState } from "react";
import { getHeroesByPublishers } from "../heroes/helpers/getHeroesByPublishers";
import { types } from "../heroes/types/types";
import { Hero } from "../entities/entities";

export const useFetch = (
  url: string,
  dispatch: React.Dispatch<{ type: string; payload: Hero[] }>,
  publisher: string
): Hero[] | never => {
  const [dataArray, setDataArray] = useState<Hero[] | never>([]);

  const getFetch = async () => {
    const resp = await fetch(url);
    const data = await resp.json();

    const filter = getHeroesByPublishers(publisher, data);

    dispatch({ type: types.fetch, payload: filter });

    setDataArray(data);
  };

  useEffect(() => {
    getFetch();
  }, [publisher]);

  return dataArray;
};
