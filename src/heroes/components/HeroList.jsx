import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { usePagination } from "../../hooks/usePagination";
import { HeroCard } from "./HeroCard";
import "./HeroList.css";
import { Pagination } from "./Pagination";

export const HeroList = ({ publisher }) => {
  const { counter, increment, decrement, reset, setCounter } = useCounter(1);

  const {
    renderPageNumbers,
    currentItems,
    pageDecrementBtn,
    pageIncrementBtn,
    handleNextPage,
    handlePrevPage,
    pages,
  } = usePagination(
    publisher,
    20,
    counter,
    increment,
    decrement,
    reset,
    setCounter
  );

  return (
    <>
      <section className="section_cards">
        <ul className="cards_container">
          {currentItems.map((publish) => (
            <HeroCard key={publish.id} {...publish}></HeroCard>
          ))}
        </ul>

        <Pagination
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          renderPageNumbers={renderPageNumbers}
          pageDecrementBtn={pageDecrementBtn}
          pageIncrementBtn={pageIncrementBtn}
          currentPage={counter}
          pages={pages}
        ></Pagination>
      </section>
    </>
  );
};
