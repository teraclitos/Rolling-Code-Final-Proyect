import React from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationNew = ({ page, setPage, totalPages }) => {
  let active = page;
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        onClick={() => {
          setPage(number);
        }}
        key={number + "pagination"}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
};

export default PaginationNew;
