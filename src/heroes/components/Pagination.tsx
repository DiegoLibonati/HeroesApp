import React from "react";
import "./Pagination.css";
import { PaginationProps } from "../../entities/entities";

export const Pagination = ({
  renderPageNumbers,
  pageDecrementBtn,
  pageIncrementBtn,
  currentPage,
  pages,
  handleNextPage,
  handlePrevPage,
}: PaginationProps): JSX.Element => {
  return (
    <section className="pagination_section">
      <article className="pagination_container">
        <ul className="pagination_container_list">
          <li>
            <button
              className="pagination-button"
              onClick={() => handlePrevPage()}
              disabled={currentPage === pages[0] ? true : false}
            >
              Prev
            </button>
          </li>
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
          <li>
            <button
              className="pagination-button"
              onClick={() => handleNextPage()}
              disabled={currentPage === pages.length ? true : false}
            >
              Next
            </button>
          </li>
        </ul>
      </article>
    </section>
  );
};
