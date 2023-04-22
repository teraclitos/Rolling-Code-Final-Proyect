import React from "react";
import Pagination from "react-bootstrap/Pagination";
import "../styles/allcss.css";

const PaginationNew = ({
  page,
  setPage,
  totalPages,
  setIsLoading,
  setIsLoadingHighlight,
}) => {
  let active = page;
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <div
        className={
          number !== active
            ? "pagination-item-news"
            : "pagination-item-news pagination-item-news-active"
        }
        onClick={() => {
          setIsLoading(true);

          setPage(number);
        }}
        key={number + "pagination"}
      >
        {number}
      </div>
    );
  }
  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
};

export default PaginationNew;
