import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Pagination = ({ totalPages, currentPage, nextPage, prevPage }) => {
  console.log(currentPage,'dfjas;kldfjs;ak')
  const nextNumber = parseInt(nextPage?.match(/page=(\d+)/)[1]);
  const prevNumber = parseInt(prevPage?.match(/page=(\d+)/)[1]);

  const windowSize = 5; 

  const getPageRange = () => {
    const currentGroup = Math.ceil(currentPage / windowSize);
    const startPage = Math.max(1, (currentGroup - 1) * windowSize + 1);
    const endPage = Math.min(totalPages, currentGroup * windowSize);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };

  const pageNumbers = getPageRange();



  return (
    <nav
      aria-label="Page navigation"
      className="flex justify-center mt-8"
    >
      <ul className="flex gap-2 items-center list-none p-0">
        {/* Previous button */}
        <li
          className={` ${
            currentPage === 1 ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          <NavLink
            className=" hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none"
            to={`?page=${prevNumber}`}
            aria-label="Previous"
            disabled={currentPage === 1} // Disable if on first page
          >
            <span aria-hidden="true">‹ Previous</span>
          </NavLink>
        </li>

        {/* Page numbers */}
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={` ${
              currentPage === pageNumber ? "font-bold text-indigo-500" : ""
            }`}
          >
            <NavLink
              className=" px-3 py-1 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              to={`?page=${pageNumber}`}
              aria-current={currentPage === pageNumber ? "page" : undefined}
            >
              {pageNumber}
            </NavLink>
          </li>
        ))}

        {/* Next button */}
        <li
          className={` ${
            currentPage === totalPages ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          <NavLink
            className=" hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none"
            to={`?page=${nextNumber}`}
            aria-label="Next"
            disabled={currentPage === totalPages} // Disable if on last page
          >
            <span aria-hidden="true">Next ›</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  nextPage: PropTypes.string.isRequired,
  prevPage: PropTypes.string,
};




