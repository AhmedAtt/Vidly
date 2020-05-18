import React, { Component } from "react";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  let pages = new Array();
  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          className={page === currentPage ? "page-item active" : "page-item"}
          key={page}
        >
          <a onClick={() => onPageChange(page)} className="page-link" href="#">
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
