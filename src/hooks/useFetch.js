import { useEffect, useMemo, useState } from "react";
import { getHeroesByPublishers } from "../heroes/helpers/getHeroesByPublishers";
import { types } from "../heroes/types/types";

export const useFetch = (url, dispatch, publisher) => {
  const [dataArray, setDataArray] = useState([]);

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

  return {
    dataArray,
  };
};
