import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  let pages = [];
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
          <a href="#" onClick={() => onPageChange(page)} className="page-link">
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
