import React from "react"
import { useEffect, useState } from "react";
import { UsePagination } from "../entities/entities";

export const usePagination = <T,>(
  arr: T[],
  ipp: number,
  counter: number,
  increment: (value: number) => void,
  decrement: (value: number) => void,
  reset: () => void,
  setCounter: React.Dispatch<React.SetStateAction<number>>
): UsePagination<T> => {
  const [itemsPerPage] = useState<number>(ipp);

  const [pageNumberLimit] = useState<number>(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(0);

  const pages: number[] = [];

  for (let i = 1; i <= Math.ceil(arr.length / itemsPerPage); i++) {
    pages.push(i);
  }

  useEffect(() => {
    reset();
    setMaxPageNumberLimit(5);
    setMinPageNumberLimit(0);
  }, [arr]);

  const handleClick = (e) => {
    setCounter(Number(e.target.id));
  };

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          className={
            counter === number
              ? "pagination-page pagination-page-active"
              : "pagination-page "
          }
          key={number * 154}
          id={String(number)}
          onClick={handleClick}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const indexOfLastItem = counter * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = arr.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    increment(1);

    if (counter + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevPage = () => {
    decrement(1);
    if ((counter - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn;

  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li className="pagination-button" onClick={() => handleNextPage()}>
        &hellip;
      </li>
    );
  }

  let pageDecrementBtn;

  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li className="pagination-button" onClick={() => handlePrevPage()}>
        &hellip;
      </li>
    );
  }

  return {
    currentItems,
    pages,
    renderPageNumbers,
    pageDecrementBtn,
    pageIncrementBtn,
    handleNextPage,
    handlePrevPage,
  };
};
