import React from 'react';
import usePagination, { DOTS } from './UsePagination';
import "./Pagination.css"

/**
 * The Pagination component is used for navigating different portions of the table. It shows the current
 * page and neighbouring pages or the first/last page to be able to easily switch pages.
 * @param props
 *  - onPageChange: function that handles the changing of the page
 *  - totalCount: the total number of elements
 *  - siblingCount: the number of page pills that you wish to see next to the selected page
 *  - currentPage: the page that you are currently on
 *  - pageSize: the size of a single page, the number of elements that fit on a single page
 */

interface Props {
  onPageChange: (pageIndex: number) => void,
  totalCount: number,
  siblingCount?: number,
  currentPage: number,
  pageSize: number
}

const Pagination = ({ onPageChange, totalCount, siblingCount = 1, currentPage, pageSize }: Props) => {
  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize });

  // If there are less than 2 times in pagination range we shall not render the component
  if (paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  let dotsCount = 0;
  return (
    <div className={'pagination-container'}>
      {/* Left navigation arrow */}
      <div
        className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
        role={"button"}
        onKeyPress={onPrevious}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </div>
      {paginationRange.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          dotsCount += 1;
          return (
            <li key={`dots-${dotsCount}`} className={"pagination-item dots"}>
              &#8230;
            </li>
          );
        }

        // Render our Page Pills
        return (
          <div
            key={pageNumber}
            className={`pagination-item ${pageNumber === currentPage ? "selected" : ""}`}
            onClick={() => onPageChange(Number(pageNumber))}
            role="button"
            onKeyPress={() => onPageChange(Number(pageNumber))}
          >
            {pageNumber}
          </div>
        );
      })}
      {/*  Right Navigation arrow */}
      <div
        className={`pagination-item ${currentPage === lastPage ? "disabled" : ""}`}
        role={"button"}
        onKeyPress={onNext}
        onClick={onNext}
      >
        <div className="arrow right" />
      </div>
    </div>
  );
};

export default Pagination;